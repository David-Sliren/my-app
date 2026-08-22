import { User } from "@/database/user";

export const updatePatientInUser = async (doc) => {
  await User.findByIdAndUpdate(doc.userId, {
    $push: { patients: doc._id },
  });
};
