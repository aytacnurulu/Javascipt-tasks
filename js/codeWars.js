// Rock scissors paper

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw";
  }

  if (p1 === "Rock") {
    if (p2 === "Scissors") {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
  } else if (p1 === "Scissors") {
    if (p2 === "Paper") {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
  } else if (p1 === "Paper") {
    if (p2 === "Rock") {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
  }
};

console.log(rps("Rock", "Scissors"));
console.log(rps("Paper", "Rock"));
console.log(rps("Scissors", "Scissors"));

// 1.	Palindrom

let number = 3969;
let copyNumber = number;
let polindrom = 0;
while (copyNumber > 0) {
  let remainder = copyNumber % 10;
  copyNumber = Math.floor(copyNumber / 10);
  polindrom = polindrom * 10 + remainder;
  console.log(polindrom);
}

if (polindrom === number) {
  console.log("this number is polindrom");
} else {
  console.log("this number is NOT polindrom");
}

// Longest Increasing Subsequence
let array = [10, 9, 2, 3, 7, 101, 18, 23, 44];
//mentiqen dusunek en uzun artan ardicilligi nece tapmaq olar
//for dovrunden elementin uzerinden kecende eger artirsa
//sira count da artacaq azaldigi mamentda maxCountda
//qalacaq kount amma if de 0 lanacaq
let count = 0;
let maxCount = 0;
for (let i = 0; i < array.length - 1; i++) {
  if (array[i] - array[i + 1] < 0) {
    count++;
  } else {
    if (count > maxCount) {
      maxCount = count;
    }
    count = 0;
  }
}

console.log(maxCount);
