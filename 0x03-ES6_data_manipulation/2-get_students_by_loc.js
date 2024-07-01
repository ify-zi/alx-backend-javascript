export default function getStudentsByLocation(list, loc) {
  if (Array.isArray(list)) {
    const ls = list.map((x) => x);
    return ls.filter((l) => l.location === loc);
  }
  return [];
}
