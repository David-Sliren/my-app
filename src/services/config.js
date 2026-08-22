import { BASE_URL, VERCEL_URL } from "@/constants/env";

export const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";

  if (VERCEL_URL) return VERCEL_URL;

  return BASE_URL || "http://localhost:3000";
};
