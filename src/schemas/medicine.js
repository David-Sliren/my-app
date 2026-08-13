import z from "zod";

export const medicineSchema = z.object({
  name: z.string().min(3, "Debe tener minimo 3 caracteres"),
  totalUnit: z.number().min(1, "Debe tener como minimo 1 unidad"),
  price: z.number().min(1000, "Debe ser mayor a 1000"),
  lastUpdate: z.date().default(Date.now).optional(),
  status: z.enum(["en orden", "agotado", "bajo"]),
  concentration: z.string().min(3, "Debe tener minimo 3 caracteres").optional(),
  isMedicine: z.boolean().default(true).optional(),
  patientId: z.string().regex(/^[0-9a-fA-F]{24}$/, "el id no es valido"),
  createBy: z.string().regex(/^[0-9a-fA-F]{24}$/, "el id no es valido"),
  updateBy: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "el id no es valido")
    .optional(),
});
