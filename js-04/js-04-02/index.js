function searchWord(str, word) {
    if (str.includes(word)) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkWord() {
    var str = "Hello my friends";
    var word = "friends";
    var result = searchWord(str, word);
    if (result) {
      console.log("word exist!");
    } else {
      console.error("word don't exist!");
    }
  }
  
  checkWord();