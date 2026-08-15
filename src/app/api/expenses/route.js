import { Expenses } from "@/models/expense";

export const GET = async () => {
  try {
    const expense = await Expenses.getAll();
    return Response.json(expense);
  } catch (error) {
    if (error.code === "NOT_FOUND_EXPENSES") {
      return Response.json({ error: error.message }, { status: 404 });
    }

    console.log("unexpected error: ", error);

    return Response.json({ error: "internal server error" }, { status: 500 });
  }
};
