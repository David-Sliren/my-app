import axios from "axios";
import { getBaseUrl } from "../config";

export const baseUrlContribution = axios.create({
  baseURL: `${getBaseUrl()}/api/contributions`,
});
