export default function createInt8TypedArray(len, pos, val) {
  const arr = new ArrayBuffer(len);
  const value = new DataView(arr);

  try {
    value.setInt8(pos, val);
  } catch (e) {
    throw Error('Position outside range');
  }
  return value;
}
