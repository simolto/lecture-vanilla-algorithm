function isPrime(num) {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }
  return true
}

function findReversedPrimes(num, arr) {
  const reversedPrimes = arr.map(v => {
    return parseInt(v.toString().split('').reverse().join(''))
  })

  const result = reversedPrimes.filter(num => isPrime(num))
  return result
}

console.log(findReversedPrimes(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]))
