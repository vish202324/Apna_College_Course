//Qs3. Write a JavaScript function that accepts a list of country names
// as input and returns the longest country name as output.
// Example: country = ["Australia", "Germany", "United States of America"];
// output: "United States of America";

let country_arr = ["Australia", "Germany", "United States of America"];
let large_country = ""; // initially large country length is 0

for (let i = 0; i < country_arr.length; i++) {
  if (country_arr[i].length > large_country.length) {
    large_country = country_arr[i];
  }
}

console.log(large_country); // Output: "United States of America"
