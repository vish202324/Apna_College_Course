// Que:
let arr = [1, 2, 3, 4, 5];
function doubleAndReturnArgs(arr, ...args) {
  let double = args.map((el) => el * 2);
  let newArr = [...arr, ...double];
  return newArr;
}
let finalOp = doubleAndReturnArgs(arr, 10, 20, 30);
console.log(finalOp);
