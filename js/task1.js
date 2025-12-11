// function startGame() {
//   let totalPoints = 0;

//   let question1 = prompt(
//     "Ən kiçik 3 rəqəmi toplayanda neçə edir? (İpucu: 0 da rəqəmdir.)"
//   );
//   if (question1 == 3) {
//     alert("Bəli, haqlısınız, 5 xal qazandınız");
//     totalPoints += 5;
//   } else {
//     alert("Təəssüf ki səhvdir");
//   }

//   let value = confirm("Oyuna davam etmək istəyirsənmi?");
//   if (!value) {
//     alert(`Sənin total xalın: ${totalPoints}`);
//     alert("OYUN BİTTİ");
//     return;
//   }

//   let question2 = prompt(
//     "Bir saat əvvəl saat 3 idi. Amma 1 saat sonra saat 5 olacaq. Bu necə ola bilər?"
//   );
//   if (question2 == 4) {
//     alert("Bəli, haqlısınız, 5 xal qazandınız");
//     totalPoints += 5;
//   } else {
//     alert("Təəssüf ki səhvdir");
//   }

//   value = confirm("Oyuna davam etmək istəyirsənmi?");
//   if (!value) {
//     alert(`Sənin total xalın: ${totalPoints}`);
//     alert("OYUN BİTTİ");
//     return;
//   }

//   let question3 = prompt(
//     "10 dəqiqəlik iş 10 nəfərə 10 manatdır. Bəs 1 nəfərin 10 dəqiqəlik işi neçə manatdır?"
//   );
//   if (question3 == 10) {
//     alert("Bəli, haqlısınız, 5 xal qazandınız");
//     totalPoints += 5;
//   } else {
//     alert("Təəssüf ki səhvdir");
//   }

//   value = confirm("Oyuna davam etmək istəyirsənmi?");
//   if (!value) {
//     alert(`Sənin total xalın: ${totalPoints}`);
//     alert("OYUN BİTTİ");
//     return;
//   }

//   let question4 = prompt("2*2-5*4+10");
//   if (question4 == -6) {
//     alert("Bəli, haqlısınız, 5 xal qazandınız");
//     totalPoints += 5;
//   } else {
//     alert("Təəssüf ki səhvdir");
//   }

//   alert(`Sənin total xalın: ${totalPoints}`);
//   alert("OYUN BİTTİ");
// }

// startGame();

// Homeworks methods
// Part 1
// task 1
let pet = "golden retriever";
console.log(pet.toUpperCase());

// task 2
let question = "Can you solve this problem?";
console.log(question.length);

// task 3
let activity = "This game is boring";
let replacedActivity = activity.replace("boring", "exciting");
console.log(replacedActivity);

// task 4
let headline = "Choose Your Adventure!";
let headlineArray = headline.slice(12, 21);
console.log(headlineArray);

// Part 2
// task 1
let desserts = ["Ice Cream", "Pie", "Pudding"];
desserts.push("Cake");
console.log(desserts);
// task 2
let cities = ["London", "New York", "Tokyo"];
let booleanValue = cities.includes("Paris");
console.log(booleanValue);
// task 3
let cars = ["Sedan", "Coupe"];
let trucks = ["Pickup", "SUV"];

let result = [...cars, ...trucks];
let result1 = cars.concat(trucks);
console.log(result);
console.log(result1);
// task 4

// let desserts = ["Ice Cream", "Pie", "Pudding", "Cake"];
console.log(desserts.indexOf("Pie"));

// Bonus Task
let word = "Technology";
let wordArray = word.split("");
let reversedArray = wordArray.reverse()

console.log(reversedArray.join(""));
