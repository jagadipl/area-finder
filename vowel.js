function checkVowelOrConsonent(text) {
    char = text[0]
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    return "vowel"
  } else {
   return "consonent"
  }
}

data = checkVowelOrConsonent("apple")

console.log(data);

