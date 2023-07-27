function getOddsMinAndSum() {
  const args = [...arguments]
  const odds = args.filter(arg => !Number.isInteger(arg / 2))

  return [odds.reduce((prev, curr) => prev + curr, 0), Math.min(...odds)]
}

console.log(getOddsMinAndSum(12, 77, 38, 41, 53, 92, 85))
