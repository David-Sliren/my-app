import { Contribution } from "@/database/contribution";
import { Patient } from "@/database/patient";

export async function deleteAllContributionOfUser() {
  await Contribution.deleteMany({ userId: this._id });
}

export async function deleteAllPatientOfUser() {
  await Patient.deleteMany({ userId: this._id });
}
