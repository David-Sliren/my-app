import { BASE_URL } from "@/constants/env";

export const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";

  if (process.env.NODE_ENV === "development") return "http://localhost:3000";

  if (!BASE_URL || !/^https?:\/\/.+/.test(BASE_URL)) {
    throw new Error(`BASE_URL inválida: "${BASE_URL}"`);
  }

  return BASE_URL;
};
