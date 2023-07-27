function findUpperCaseLength(text) {
  return text.match(/[A-Z]/g).length
}

console.log(findUpperCaseLength('KoreaTimeGood'))
