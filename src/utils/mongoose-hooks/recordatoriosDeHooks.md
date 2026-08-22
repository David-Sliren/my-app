# Mongoose Hooks — Recordatorios

## Cheat sheet

1. **`pre` / `post` + `{ document: true }`** → `this` = documento (usa `patient.deleteOne()`, `patient.save()`).
2. **`pre` / `post` sin `{ document: true }`** → `this` = query (usa `Patient.deleteOne({ _id })`, `findByIdAndDelete`).
3. **`post("save")` y `post("deleteOne", { document: true })`** → 1er argumento = documento; `this` también.
4. **`post("deleteOne")` query** → 1er argumento = `{ acknowledged, deletedCount }`; **`post("findOneAndDelete")`** → 1er argumento = documento borrado.
5. **Regla del proyecto:** `findById` → validar → `await doc.deleteOne()` / `doc.save()` para que corran los hooks.

---

## `pre` vs `post`

| Hook   | Cuándo corre                |
| ------ | --------------------------- |
| `pre`  | **Antes** de la operación   |
| `post` | **Después** de la operación |

---

## `{ document: true }`: cuándo hace falta

### `save`

Solo existe a nivel **documento**. No hay `Model.save()`.

```javascript
patientSchema.post("save", fn); // suficiente
patientSchema.post("save", { document: true }, fn); // redundante, pero válido
```

### `deleteOne`

Existe en dos niveles:

```javascript
// Documento
patientSchema.pre("deleteOne", { document: true }, fn);
patientSchema.post("deleteOne", { document: true }, fn);

// Query (sin { document: true })
patientSchema.pre("deleteOne", fn);
patientSchema.post("deleteOne", fn);
```

Para trabajar con el **documento** en `pre` y `post`, usa `{ document: true }` **y** borra así:

```javascript
await patient.deleteOne();
```

---

## Qué método dispara qué hook

| Código                          | Hook que dispara                            |
| ------------------------------- | ------------------------------------------- |
| `patient.deleteOne()`           | `pre/post("deleteOne", { document: true })` |
| `Patient.deleteOne({ _id })`    | `pre/post("deleteOne")` (query)             |
| `Patient.findByIdAndDelete(id)` | `pre/post("findOneAndDelete")`              |

`findByIdAndDelete` **no** tiene versión documento; no uses `{ document: true }` con ese hook.

---

## `this` en `pre` y `post`

Se puede usar `this` en ambos, pero su valor depende de documento vs query, no de `pre` vs `post`.

### Con `{ document: true }` (save, deleteOne de documento)

```javascript
patientSchema.pre("deleteOne", { document: true }, function () {
  this._id; // documento
  this.userId; // documento
});

patientSchema.post("deleteOne", { document: true }, function (doc) {
  this._id; // también documento
  doc._id; // mismo documento (this y doc suelen ser iguales)
});
```

### Sin `{ document: true }` (query)

```javascript
patientSchema.pre("deleteOne", function () {
  this.getFilter(); // query
});

patientSchema.post("deleteOne", function (result) {
  this.getFilter(); // query
  result.deletedCount; // info del borrado (NO es el documento)
});
```

En middleware de **query**, en `post` lo útil suele estar en el **primer argumento**, no en `this`.

---

## Query middleware: `this.model` y `this.getFilter()`

En hooks de query, `this` es la **Query** de Mongoose, no el documento.

```javascript
patientSchema.pre("findOneAndDelete", async function () {
  const filter = this.getFilter(); // ej: { _id: "..." }
  const patient = await this.model.findOne(filter); // this.model = Patient
});
```

- **`this.getFilter()`** → filtro con el que se ejecuta la operación.
- **`this.model`** → modelo asociado (ej: `Patient`).

---

## Qué devuelve cada método de borrado

| Método                          | Qué devuelve                     |
| ------------------------------- | -------------------------------- |
| `Patient.findByIdAndDelete(id)` | El documento borrado (o `null`)  |
| `await patient.deleteOne()`     | `{ acknowledged, deletedCount }` |

Si usas `patient.deleteOne()`, devuelve la instancia que ya obtuviste:

```javascript
const patient = await Patient.findById(id);
await patient.deleteOne();
return patient;
```

---

## Tabla mental final

| Operación                       | Hook               | `{ document: true }` | `this` en pre | `this` en post | Argumento en post                |
| ------------------------------- | ------------------ | -------------------- | ------------- | -------------- | -------------------------------- |
| `patient.save()`                | `save`             | opcional             | documento     | documento      | documento                        |
| `patient.deleteOne()`           | `deleteOne`        | recomendado          | documento     | documento      | documento                        |
| `Patient.deleteOne({ _id })`    | `deleteOne`        | no                   | query         | query          | `{ acknowledged, deletedCount }` |
| `Patient.findByIdAndDelete(id)` | `findOneAndDelete` | no aplica            | query         | query          | documento borrado                |

---

## Regla práctica del proyecto

```javascript
const patient = await Patient.findById(id);
// validar...
await patient.deleteOne(); // dispara pre("deleteOne", { document: true })
return patient;
```
