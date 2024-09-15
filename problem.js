//  problem -1 -----

// const data = "hello";
// const splitData = data.split("");
// console.log(splitData);
// const reverseData = splitData.reverse();
// console.log(reverseData);
// const joinData = reverseData.join("");
// console.log(joinData);

const reversedData = (text) => {
  const splitData = text.split("");
  const reversedData = splitData.reverse();
  const joinData = reversedData.join("");
  return joinData;
};
console.log(reversedData("hello"));

// alternative solution
const reversedDataLoop = (text) => {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
};

console.log(reversedDataLoop("hello"));
