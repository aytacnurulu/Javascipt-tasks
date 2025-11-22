let operator = prompt("enter an operator (+, -, *, /)");

if (
  operator === "+" ||
  operator === "-" ||
  operator === "*" ||
  operator === "/"
) {
  let number1 = parseFloat(prompt("first number"));
  let number2 = parseFloat(prompt("second number"));

  switch (operator) {
    case "+":
      console.log(number1 + number2);
      break;
    case "-":
      console.log(number1 - number2);
      break;
    case "*":
      console.log(number1 * number2);
      break;
    case "/":
      console.log(number1 / number2);
      break;
  }
} else {
  console.log("wrong operator");
}
