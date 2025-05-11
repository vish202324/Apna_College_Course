// indexof method- case senstive
let names = ["vivek", "rohan", "mukesh", "ramu"];

// checking element if found return index number if not return -1
console.log(names.indexOf("rohan"));

// Rohan and rohan are differ so Rohan is not found. it will return -1
console.log(names.indexOf("Rohan"));

//include method- case senstive
console.log(names.includes("vivek"));

// False return because case senstive
console.log(names.includes("Vivek"));

// concat method: to merge to arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

//order: arr1 then arr2
let arr_mrg1 = arr1.concat(arr2); //[1,2,3,4,5,6]
console.log(arr_mrg1);

//order: arr2 then arr1
let arr_mrg2 = arr2.concat(arr1);
console.log(arr_mrg2);

// for reverse array, use reverse method
console.log(arr1.reverse());

// to print specific part of an array from specific index
// use: slice() method
console.log(arr_mrg1.slice(1, 3));

//splice method: can add, replace, remove the element
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
let removedColors = colors.splice(1, 2);
console.log(removedColors);
// Output: [ 'Green', 'Blue' ] (Removed elements)

console.log(colors);
// Output: [ 'Red', 'Yellow', 'Purple' ] (Original Array Modified)

colors.splice(1, 1, "Black");
console.log(colors);
// Output: [ 'Red', 'Black', 'Purple' ]
