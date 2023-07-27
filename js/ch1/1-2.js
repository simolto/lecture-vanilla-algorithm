function getIdentifyTriangle() {
  const maxNumber = Math.max(...[...arguments])
  const filteredArgs = [...arguments].filter(arg => arg !== maxNumber)
  const result = filteredArgs.reduce((prev, curr) => prev + curr, 0)

  return maxNumber < result ? 'YES' : 'NO'
}

console.log(getIdentifyTriangle(6, 7, 11))
console.log(getIdentifyTriangle(13, 33, 17))
