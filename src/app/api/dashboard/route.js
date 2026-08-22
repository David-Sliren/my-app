export const GET = async () => {
  try {
    return Response.json({ message: "¡hello from dashboard!" });
  } catch (error) {
    return Response.json({ error: "internal server error" }, { status: 500 });
  }
};
