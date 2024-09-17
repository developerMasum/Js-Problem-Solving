const reverseString = (text) => {
  const split = text.split("");
  const reverse = split.reverse();
  const join = reverse.join("");
  return join;
};
// console.log(reverseString("hello"));

const countVowels = (data) => {
  const vowel = "aeiou";
  const split = data.split("");
  const count = split.filter((sw) => {
    return vowel.includes(sw);
  });
  return count.length;
};
console.log(countVowels("helloo"));
