function getword(datas, word) {
  const data = data.filter(userObj => {
    if (userObj.word === word) {
      console.log(`Your word: ${word} is in here`);
    }
    else {
      console.log(`Your word: ${word} is not in here`);
    }
  });
}
module.exports = getword;
