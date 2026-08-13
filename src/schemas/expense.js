import z from "zod";

export const expenseSchema = z.object({
  name: z.string().min(3, "Debe tener minimo 3 caracteres"),
  amount: z.number().min(1000, "Debe ser mayor a 1000"),
  currency: z.enum(["COP", "USD"]),
  category: z.enum([
    "transporte",
    "medicina",
    "suplemento",
    "clinico",
    "suministro",
    "cuidador",
  ]),
  description: z.string().min(3, "Debe tener minimo 3 caracteres").optional(),
  patientId: z.string().regex(/^[0-9a-fA-F]{24}$/, "el id no es valido"),
  createBy: z.string().regex(/^[0-9a-fA-F]{24}$/, "el id no es valido"),
  updateBy: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "el id no es valido")
    .optional(),
  date: z.date().default(Date.now).optional(),
});
