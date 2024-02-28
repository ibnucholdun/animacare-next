export const capitalizeSentence = (sentence: string) => {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
};

export const capitalizeWord = (word: string) => {
  if (word) {
    return word[0].toUpperCase() + word.slice(1);
  }
};
