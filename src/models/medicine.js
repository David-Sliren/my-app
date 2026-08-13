import { Medicine } from "@/database/medicine";
import { Patient } from "@/database/patient";
import { User } from "@/database/user";
import { conectToData } from "@/utils/mongoose-helper/db";

export class Medicines {
  static async getAll() {
    await conectToData();

    const medicines = await Medicine.find({});

    if (!medicines) {
      const customError = new Error("not found medicines");
      customError.code = "NOT_FOUND_MEDICINES";
      throw customError;
    }

    return medicines;
  }

  static async getById(id) {
    await conectToData();

    try {
      const medicines = await Medicine.findById(id);

      if (!medicines) {
        const customError = new Error("not found medicine");
        customError.code = "NOT_FOUND_MEDICINE";
        throw customError;
      }

      return medicines;
    } catch (error) {
      if (error.name == "CastError") {
        const customError = new Error("invalid id");
        customError.code = "INVALID_ID";
        throw customError;
      }
      throw error;
    }
  }

  static async create(data) {
    await conectToData();

    try {
      const user = await User.findById(data.createBy);

      if (!user || (user && user.role === "user")) {
        const customError = new Error("user unauthorized");
        customError.code = "USER_UNAUTHORIZED";
        throw customError;
      }

      const patient = await Patient.findById(data.patientId);

      if (!patient) {
        const customError = new Error("patient not found");
        customError.code = "PATIENT_NOT_FOUND";
        throw customError;
      }

      const saveMedicine = new Medicine(data);
      const newMedicine = await saveMedicine.save();

      if (!newMedicine) {
        const customError = new Error("can't create medicine");
        customError.code = "CANT_CREATE_MEDICINE";
        throw customError;
      }

      return newMedicine;
    } catch (error) {
      throw error;
    }
  }

  static async delete(data) {
    await conectToData();
    try {
      const user = await User.findById(data.userId);

      if (!user || (user && user.role === "user")) {
        const customError = new Error("user unauthorized");
        customError.code = "USER_UNAUTHORIZED";
        throw customError;
      }

      const medicine = await Medicine.findById(data.id);

      if (!medicine) {
        const customError = new Error("not found medicine");
        customError.code = "NOT_FOUND_MEDICINE";
        throw customError;
      }

      await medicine.deleteOne();

      return medicine;
    } catch (error) {
      if (error.name == "CastError") {
        const customError = new Error("invalid id");
        customError.code = "INVALID_ID";
        throw customError;
      }
      throw error;
    }
  }

  static async update(id, data) {
    await conectToData();

    try {
      const user = await User.findById(data.updateBy);

      if (!user || (user && user.role === "user")) {
        const customError = new Error("user unauthorized");
        customError.code = "USER_UNAUTHORIZED";
        throw customError;
      }

      const updateMedicine = await Medicine.findByIdAndUpdate(id, data, {
        new: true,
      });

      if (!updateMedicine) {
        const customError = new Error("cant update medicine");
        customError.code = "CANT_UPDATE_MEDICINE";
        throw customError;
      }

      return updateMedicine;
    } catch (error) {
      if (error.name == "CastError") {
        const customError = new Error("invalid id");
        customError.code = "INVALID_ID";
        throw customError;
      }

      throw error;
    }
  }
}
