function extractNumbersFromString(text) {
  const numbersOnly = text.replace(/\D/g, '')
  return parseInt(numbersOnly, 10)
}

console.log(extractNumbersFromString('g0en2T0s8eSoft'))
