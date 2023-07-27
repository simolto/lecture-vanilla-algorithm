function getMiddleString(text) {
  return text.length % 2 === 0
    ? text.slice(text.length / 2 - 1, text.length / 2 + 1)
    : text.slice(text.length / 2, text.length / 2 + 1)
}

console.log(getMiddleString('study'))
console.log(getMiddleString('good'))
