import { baseUrlUser } from "./config";

export const getAllUsers = async () => {
  try {
    const { data } = await baseUrlUser.get("/");
    return data;
  } catch (error) {
    throw error?.responde?.message;
  }
};

export const getById = async (id) => {
  try {
    const { data } = await baseUrlUser.get(`/${id}`);
    return data;
  } catch (error) {
    console.log("error?.response?.message: ", error?.response?.message);
    // throw error?.response?.message;
    throw error;
  }
};
