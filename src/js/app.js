// TODO: write your code here
export default function destructuringObj(data) {
  const result = [];
  for (const {
    id,
    name,
    description = "описание не доступно",
    icon,
  } of data.special) {
    result.push({
      id,
      name,
      description,
      icon,
    });
  }
  return result;
}
