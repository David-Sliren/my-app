import { cleanIdPlugin } from "@/utils/mongoose-helper/cleanDatabase";
import { model, models, Schema } from "mongoose";

const inventorySchema = new Schema(
  {
    name: { type: String, required: true },
    totalUnit: { type: Number, required: true },
    price: { type: Number, default: 0 },
    status: {
      type: String,
      required: true,
      enum: ["en orden", "agotado", "bajo"],
    },
    concentration: { type: String, default: "" },
    category: {
      type: String,
      enum: ["medicina", "suplemento", "suministro"],
      required: true,
    },
    description: { type: String, default: "" },
    patientId: { type: Schema.ObjectId, ref: "Patient" },
    date: { type: Date, default: Date.now },
    createBy: { type: Schema.ObjectId, required: true, ref: "User" },
    updateBy: { type: Schema.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

inventorySchema.plugin(cleanIdPlugin);

export const Inventory =
  models.Inventory || model("Inventory", inventorySchema);
