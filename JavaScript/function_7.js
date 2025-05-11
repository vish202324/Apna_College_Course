function factory_func(request) {
  if (request === "odd") {
    return function (n) {
      console.log(`${n} is Odd? → ${!(n % 2 === 0)}`);
    };
  } else if (request === "even") {
    return function (n) {
      console.log(`${n} is Even? → ${n % 2 === 0}`);
    };
  } else {
    return function () {
      console.log("Wrong Choice");
    };
  }
}

let checkOdd = factory_func("odd");
checkOdd(3);

let checkEven = factory_func("even");
checkEven(6);

let wrong = factory_func("xyz");
wrong(); // Output: Wrong Choice
