export const formatMoney = (value) => {
  try {
    if (!value) return "$0";

    const cleanAmount = String(value).replace(/\D/g, "");

    if (!cleanAmount) return 0;

    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(cleanAmount);
  } catch (error) {
    console.log("Error en el formatMoney ", error);

    return `$${value}`;
  }
};
