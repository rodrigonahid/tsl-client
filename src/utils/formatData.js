export default function formatData(data) {
  const date = new Date(data);
  const [week, month, day, year, datetime] = date.toString().split(" ");
  const [hours, minutes] = datetime.split(":");

  return `Created at ${day}, ${month} ${hours}h${minutes}m`;
}
