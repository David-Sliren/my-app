import { Patients } from "@/models/patient";

export const GET = async (_req, { params }) => {
  const { id } = await params;
  try {
    const patient = await Patients.getById(id);
    return Response.json(patient.toJSON({ virtuals: false }));
  } catch (error) {
    if (error.code === "INVALID_ID") {
      return Response.json(error.message, { status: 400 });
    }

    if (error.code === "NOT_FOUND_PATIENT") {
      return Response.json(error.message, { status: 404 });
    }

    console.log("unexpected error: ", error);

    return Response.json({ error: "internal server error" }, { status: 500 });
  }
};
