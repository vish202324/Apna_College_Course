function validateForm(name) {
  try {
    if (!name) {
      throw new Error("Name field cannot be empty!");
    }
    console.log(`Welcome, ${name}!`);
  } catch (err) {
    console.log("Form Error:", err.message);
  }
}

// यूज़र ने कुछ नहीं डाला
validateForm("");
