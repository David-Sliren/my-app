import { Inventories } from "@/models/inventory";

export const GET = async () => {
  try {
    const medicines = await Inventories.getAll();
    return Response.json(medicines);
  } catch (error) {
    if (error.code === "NOT_FOUND_MEDICINES") {
      return Response.json({ error: error.message }, { status: 404 });
    }

    console.log("unexpected error: ", error);

    return Response.json({ error: "internal server error" }, { status: 500 });
  }
};
