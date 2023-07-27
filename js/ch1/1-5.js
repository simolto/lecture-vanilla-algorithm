function getMinNumber() {
  return Math.min(...[...arguments])
}

console.log(getMinNumber(5, 3, 7, 11, 2, 15, 17))
