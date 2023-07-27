function getSumNumber(num) {
  const numbers = Array.from({ length: num + 1 }, (_, index) => index)
  return numbers.reduce((acc, cur) => acc + cur, 0)
}

console.log(getSumNumber(6))
console.log(getSumNumber(10))
