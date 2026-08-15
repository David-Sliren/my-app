import { Inventories } from "@/models/inventory";

export const GET = async (_req, { params }) => {
  const { id } = await params;

  try {
    const medicine = await Inventories.getById(id);
    return Response.json(medicine);
  } catch (error) {
    if (error.code === "INVALID_ID") {
      return Response.json({ error: error.message }, { status: 400 });
    }

    if (error.code === "USER_UNAUTHORIZED") {
      return Response.json({ error: error.message }, { status: 401 });
    }

    if (error.code === "NOT_FOUND_MEDICINE") {
      return Response.json(error.message, { status: 404 });
    }

    console.log("unexpected error: ", error);
    return Response.json({ error: "internal server error" }, { status: 500 });
  }
};
