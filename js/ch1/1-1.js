function getMinNumber() {
  const args = [...arguments]
  return Math.min(...args)
}

console.log(getMinNumber(6, 5, 11))
