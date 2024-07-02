export default function setFromArray(arr) {
  try {
    if (Array.isArray(arr)) {
      return new Set(arr);
    }
  } catch (e) {
    throw Error('Array must be an Array type');
  }
  return {};
}
