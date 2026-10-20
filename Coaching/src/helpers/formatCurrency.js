export default function formatCurrency(amount, persianNum=true) {
  const number = Number(amount);

  if (Number.isNaN(number)) return "";

  if (persianNum) {
    return `${new Intl.NumberFormat("fa-IR").format(number)} تومان`;
  }
  return `${new Intl.NumberFormat("en-US").format(number)} تومان`;
}
