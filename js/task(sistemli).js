// // NOVEMBER 29
// // Task 1
// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// let array = [1, 2, 3, 45, 5, 6, 8, 89, 9];
// console.log(sum(array));

// // Task 2

// function factorial(number) {
//   let factorial = 1;
//   for (let i = 1; i <= number; i++) {
//     factorial *= i;
//   }

//   return factorial;
// }
// let number = 5;
// console.log(factorial(number));

// // Task 3
// let array2 = [3, 7, 2, 8, 5];

// function maxNumber(array) {
//   let maxNumber = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (maxNumber <= array[i]) {
//       maxNumber = array[i];
//     }
//   }

//   return maxNumber;
// }

// console.log(maxNumber(array2));

// //Task 4 completed
// //Task 5 completed

// //DECEMBER 3
// // Task 1
// function countVowels(string) {
//   let array = ["a", "e", "i", "o", "u"];
//   count = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (array.includes(string[i])) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// string = "Javascript";
// countVowels(string);

// //Task2
// function printEvens(number) {
//   let evenNumbersArray = [];
//   for (let i = 2; i <= number; i = i + 2) {
//     evenNumbersArray.push(i);
//   }
//   return evenNumbersArray;
// }

// console.log(printEvens(10));

// //Task3
// function sumDigits(number) {
//   sum = 0;
//   while (number > 0) {
//     remainder = number % 10; //3 2 1
//     number = Math.floor(number / 10); //12 1 0
//     sum += remainder; //3 5 6
//   }
//   return sum;
// }

// console.log(sumDigits(123));

// //Task4
// function multiplicationTable(number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number}*${i} = ${number * i}`);
//   }
// }

// multiplicationTable(3);

// //Task5
// function fizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 !== 0 && i % 5 !== 0) {
//       console.log(i);
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log("FizzBuzz");
//     }
//   }
// }

// fizzBuzz(15);

// 6 DECEMBER
// Task 1
// function callBack(params) {
//   return params;
// }
// function performOperation(number, callBack) {
//   return number + callBack(29);
// }
// console.log(performOperation(5, callBack));

// Task 2
// function transformArray(array, callBack) {
//   let newArray = [];
//   for (let index = 0; index < array.length; index++) {
//     newArray.push(callBack(array[index]));
//   }
//   return newArray;
// }

// function square(number) {
//   return number * number;
// }

// let myArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(transformArray(myArray, square));

// // Task 3
// function filterArray(array, callBack) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callBack(array[i])) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// function checking(number) {
//   return number % 2 === 0;
// }

// let filteredArray = filterArray(myArray, checking);
// console.log(filteredArray);

// // Task 4
// function divideNumbers(number1, number2, callBack) {
//   if (number1 === 0 || number2 === 0) {
//     return "it is not possible";
//   } else {
//     return callBack(number1, number2);
//   }
// }
// function division(number, divisor) {
//   return number / divisor;
// }

// console.log(divideNumbers(10, 0, division));

// Task 5
// function divide(a, b, callback) {
//     if (b === 0) {
//         callback(new Error("Cannot divide by zero"), null);
//     } else {
//         callback(null, a / b);
//     }
// }

// function result(error, result) {
//     if (error) {
//         console.log("Error:", error.message);
//     } else {
//         console.log("Result:", result);
//     }
// }

// divide(10, 2, result);
// divide(10, 0, result);

//"PRACTISE"
// practise 1
//map foreach sort filter reduce find fill some every

// array = [12, 14, 20, 40, 78, 90];
// function filterArray(array, callBack) {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     let currentElement = array[i];

//     if (callBack(currentElement)) {
//       newArray.push(currentElement);
//     }
//   }

//   return newArray;
// }
// function renderElement(element) {
//   return element % 10 === 0;
// }
// console.log(filterArray(array, renderElement));

// // practise 2
// // Map metodu arraydaki her bir elementi deyisdirerek yeni array qaytarir
// let numbers = [90, 3, 5, 23, 7, 9, 89, 22, 98];
// let double = numbers.map(function (element) {
//   return element * 2;
// });
// console.log(numbers);
// console.log(double);
// // practise 3
// // forEach() — Array-dəki hər bir elementi iterasiya etmək üçün
// numbers.forEach(function (num) {
//   console.log(num * 2); // 2, 4, 6, 8, 10
// });

// // practise 4
// // sort() metodu array-dəki elementləri sıralayır.
// // Amma rəqəmləri düzgün sıralamaq üçün müqayisə
// // funksiyası istifadə etmək lazımdır.
// // numbers.sort(function (a, b) {
// //   return a - b;
// // });

// // console.log(numbers);

// // practise 5
// // filter() — Kriteriyaya əsasən elementləri süzmək
// let evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers);

// // practise 6
// // reduce() — Array-dəki elementləri birləşdirmək

// let multiplication = numbers.reduce(function (acc, element) {
//   return acc * element;
// });

// console.log(multiplication);

// // practise 7
// // find() — İlk uyğun elementi tapmaq

// let found = numbers.find(function (element) {
//   return element > 78;
// });

// console.log(found);
// //practise 8
// //fill() — Array-in bütün elementlərini eyni dəyərlə doldurmaq

// 10 December

//Task 1
// let numbers = [1, -4, 7, 12];

// function positiveSum(arr) {
//   let positiveNumbers = arr.filter(function (element) {
//     return element > 0;
//   });
//   let sum = positiveNumbers.reduce(function (acc, element) {
//     return acc + element;
//   });

//   return sum;
// }

// console.log(positiveSum(numbers));

// function positiveSum(arr) {
//   arr.forEach(function (element) {
//     let sum = 0;
//     if (element > 0) {
//       sum = sum + element;
//     }
//   });
//   return sum;
// }

// positiveSum(numbers);
// //yeniden yaz

// // task 2
// function gooseFilter(birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   let newArray = [];
//   birds.forEach(function (element) {
//     if (!geese.includes(element)) {
//       newArray.push(element);
//     }
//   });
//   // return an array containing all of the strings in the input array except those that match strings in geese

//   return newArray;
// }

// function gooseFilter(birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

//   let newArray = birds.filter(function (element) {
//     geese.forEach(function())
//   });
// }
//yeniden yaz

//task 3
let array = [1, 2, 3, 4, 5, 6, 7];
let squared = array.map(function (element) {
  return element * element;
});
console.log(squared);

// function duplicate(array) {
//   let newArray = [];
//   array.forEach(function (element) {
//     newArray.push(element * 2);
//   });
//   return newArray;
// }

let newArray = [];
array.forEach(function (element) {
  newArray.push(element * 2);
});

console.log(newArray);
// console.log(duplicate(array));
