// implicit return in Arrow function
// जब आप एक single expression return करना चाहते हैं
// बिना return keyword और curly braces {} के।
let greet = (name) => "Hello " + name;

// ❌ अगर आपने {} लगाए तो आपको return लिखना ही पड़ेगा:
// This WILL NOT return anything!
let greet3 = (name) => {
  "Hello " + name; // ❌ undefined
};

// Correct way with {}
let greet2 = (name) => {
  return "Hello " + name; // ✅
};
