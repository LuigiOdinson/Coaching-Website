export default function formatPersianDate(isoDate) {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
