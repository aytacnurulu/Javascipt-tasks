// let operator = prompt("enter an operator (+, -, *, /)");

// if (
//   operator === "+" ||
//   operator === "-" ||
//   operator === "*" ||
//   operator === "/"
// ) {
//   let number1 = parseFloat(prompt("first number"));
//   let number2 = parseFloat(prompt("second number"));

//   switch (operator) {
//     case "+":
//       console.log(number1 + number2);
//       break;
//     case "-":
//       console.log(number1 - number2);
//       break;
//     case "*":
//       console.log(number1 * number2);
//       break;
//     case "/":
//       console.log(number1 / number2);
//       break;
//   }
// } else {
//   console.log("wrong operator");
// }

let array1 = [1, 2, 3, 4];
let array2 = [6, 7, 8];

let combine = array1.concat(array2);
console.log(combine);

var studentList = ["john", "Marry", "Ali"];
var studentName = "john";

if (studentList.includes(studentName)) {
  console.log(`${studentName} is student`);
}

var list = ["John", "Katy", "Simson"];
firstName = list[0];
lastName = list[2];
console.log(`${lastName} is the last student in the class`);
console.log(`${firstName} is the first student in the class`);

var list1 = [7, 9, 0, -2];
var list2 = [[1], 3];

console.log(list1.slice(0, 1));
console.log(list2.slice(0, 1));

var items = ["water", "tea", "milk", "juice"];
items.splice(2, 1, "almond-milk");
console.log(items);
