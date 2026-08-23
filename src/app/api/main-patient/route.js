import { Patients } from "@/models/patient";

export const GET = async (_req) => {
  try {
    // Queda pendiente a actualizacion, aplicar filtrado por la propiedad
    // isMain de la colecion patient
    const patient = await Patients.getAll();
    let mainpatient = patient.length
      ? patient[0].toJSON({ virtuals: false })
      : [];

    return Response.json(mainpatient);
  } catch (error) {
    if (error.code === "NOT_FOUND_PATIENT") {
      return Response.json(error.message, { status: 404 });
    }

    console.log("unexpected error: ", error);

    return Response.json({ error: "internal server error" }, { status: 500 });
  }
};
