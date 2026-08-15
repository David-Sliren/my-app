import { cleanIdPlugin } from "@/utils/mongoose-helper/cleanDatabase";
import { model, models, Schema } from "mongoose";

const patientSchema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    img: { type: String, default: "" },
    age: { type: Number, required: true },
    userId: { type: Schema.ObjectId, ref: "User" },
    monthlyGoal: { type: Number, required: true },
    currentFounds: { type: Number, required: true, default: 0 },
    reason: { type: String, required: true },
    description: { type: String, required: true },
    carerName: { type: String, default: "" },
    clinicName: { type: String, default: "" },
    isDisabled: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

patientSchema.virtual("medicines", {
  ref: "Medicine",
  localField: "_id",
  foreignField: "patientId",
  match: { isMedicine: true },
});

patientSchema.virtual("expenses", {
  ref: "Expense",
  localField: "_id",
  foreignField: "patientId",
});

patientSchema.plugin(cleanIdPlugin);

export const Patient = models.Patient || model("Patient", patientSchema);
