import { cleanIdPlugin } from "@/utils/mongoose-helper/cleanDatabase";
import { model, models, Schema } from "mongoose";

const medicineSchema = new Schema(
  {
    name: { type: String, required: true },
    totalUnit: { type: Number, required: true },
    price: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: ["en orden", "agotado", "bajo"],
    },
    concentration: { type: String, default: "" },
    isMedicine: { type: Boolean, default: true },
    patientId: { type: Schema.ObjectId, ref: "Patient" },
    createBy: { type: Schema.ObjectId, required: true, ref: "User" },
    updateBy: { type: Schema.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

medicineSchema.plugin(cleanIdPlugin);

export const Medicine = models.Medicine || model("Medicine", medicineSchema);
