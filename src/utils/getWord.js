import shuffle from "./shuffle";

const getWords = () => {
  const words = [
    "Ankra",
    "Cairo",
    "Dubai",
    "Berlin",
    "Paris",
    "London",
    "Madrid",
    "Rome",
    "New York",
    "Tokyo",
    "Jeddah",
    "Mekka"
  ];
  const alphabits = "qwertyuiopasdfghjklzxcvbnm".split("");
  const correctWord = words[
    Math.floor(Math.random() * words.length)
  ].toLowerCase();
  let word = correctWord;
  if (correctWord.length < 9) {
    const diff = 9 - correctWord.length;
    for (let index = 0; index < diff; index++) {
      word += alphabits[Math.floor(Math.random() * alphabits.length)];
    }
  }

  word = shuffle(word.split("")).join("");
  const hint = "It's a famous city";
  return { word, correctWord, hint };
};
export default getWords;
