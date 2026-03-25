export function sumOftheValue(input = 100) {
  let reslut = 0;
  for (let i = 1; i < 20000; i++) {
    console.log("result:", reslut);
    reslut = reslut + i;
  }
  return reslut;
}
