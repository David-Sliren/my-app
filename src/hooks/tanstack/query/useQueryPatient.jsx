import { getMainPatient } from "@/services/patient/patient";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

// opciones para hacer prechechin en el servidor
export const mainPatientQueryOptions = () =>
  queryOptions({
    queryKey: ["main-patient"],
    queryFn: getMainPatient,
  });

// useSuspenseQuery para que los datos vengan precargados desde el servidor
export const useMainPatientQuery = () =>
  useSuspenseQuery(mainPatientQueryOptions());
