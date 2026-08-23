import { baseUrlMain, baseUrlDashborad } from "./config";

export const getMainPatient = async () => {
  try {
    const { data } = await baseUrlMain.get("/");
    return data;
  } catch (error) {
    throw error?.responde?.message;
  }
};
