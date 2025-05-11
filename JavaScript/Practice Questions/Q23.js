// Write a JavaScript function to extract unique(means no duplicate character repeat) characters from a string.
// Example: str = “abcdabcdefggh”
//      ans = “abcdefgh”

let str = "abcdabcdefggh";
function uniqueChar(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) {
      ans = ans + currChar;
    }
  }
  console.log(ans);
}

uniqueChar(str);
