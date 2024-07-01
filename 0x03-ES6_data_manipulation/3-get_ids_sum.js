export default function getStudentIdsSum(array) {
  if (Array.isArray(array)) {
    return array.reduce((acc, curr) => acc + curr.id, 0);
  }
  return [];
}
