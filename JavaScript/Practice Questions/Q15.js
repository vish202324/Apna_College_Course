let arr = [19, 12, 5, 13];
let st = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (st < arr[i + 1]) {
    st = arr[i + 1];
  }
}
console.log(`Largest Num ${st}`);
