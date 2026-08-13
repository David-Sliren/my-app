import { User } from "@/database/user";

export async function deletePatientOfUser() {
  await User.findByIdAndUpdate(this.userId, {
    $pull: { patients: this._id },
  });
}
