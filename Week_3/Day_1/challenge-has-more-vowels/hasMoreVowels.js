const hasMoreVowels = (word) => {
  let vowelArr = ["a", "e", "i", "o", "u"];
  let vowelCounter = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowelArr.length; j++) {
      if (vowelArr[j] === word[i].toLowerCase()) {
        // console.log(word[i]);
        vowelCounter++;
      }
    }
  }
  if (vowelCounter > word.length - vowelCounter) {
    return true;
  }
  return false;
};

console.log(hasMoreVowels("Hello"));
console.log(hasMoreVowels("Moose"));
console.log(hasMoreVowels("Mice"));
