import { cleanIdPlugin } from "@/utils/mongoose-helper/cleanDatabase";
import { model, models, Schema } from "mongoose";

const expenseSchema = new Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: {
      type: String,
      required: true,
      enum: ["COP", "USD"],
    },
    category: {
      type: String,
      required: true,
      enum: [
        "transporte",
        "medicina",
        "suplemento",
        "clinico",
        "suministro",
        "cuidador",
      ],
    },
    description: { type: String, default: "" },
    patientId: { type: Schema.ObjectId, ref: "Patient" },
    createBy: { type: Schema.ObjectId, required: true, ref: "User" },
    updateBy: { type: Schema.ObjectId, ref: "User" },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

expenseSchema.plugin(cleanIdPlugin);

export const Expense = models.Expense || model("Expense", expenseSchema);
