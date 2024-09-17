//  problem -1 -----

// const data = "hello";
// const splitData = data.split("");
// console.log(splitData);
// const reverseData = splitData.reverse();
// console.log(reverseData);
// const joinData = reverseData.join("");
// console.log(joinData);

// const reversedData = (text) => {
//   const splitData = text.split("");
//   const reversedData = splitData.reverse();
//   const joinData = reversedData.join("");
//   return joinData;
// };
// console.log(reversedData(""));

// // alternative solution
// const reversedDataLoop = (text) => {
//   let reversed = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     reversed += text[i];
//   }
//   return reversed;
// };

// console.log("solution alternative : ->", reversedDataLoop("hello"));

// problem 2
// const givenData = "imabookaaaaaaaaaaeeeeeeee";
// const vowel = "aeiou";

// const splitVowelFromGivenData = givenData.toLowerCase().split("");

// const vowelCount = splitVowelFromGivenData.filter((t) =>
//   vowel.includes(t)
// ).length;

// console.log(vowelCount);

// const countVowels = (text) => {
//   const vowel = "aeiou";
//   const count = text
//     .toLowerCase()
//     .split("")
//     .filter((singleLetter) => vowel.includes(singleLetter)).length;

//   return count;
// };

// console.log(countVowels("aaeennoo"));

const capitalWords = (text) => {
  const split = text.split(" ");
  const singleWord = split.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return singleWord;
};
console.log(capitalWords("hello world mama"));
