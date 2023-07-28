function calculateScore(num, arr) {
  let result = 0
  let count = 0

  for (let i = 0; i < num; i++) {
    if (arr[i] === 1) count++
    else count = 0

    result += count
  }
  return result
}

console.log(calculateScore(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))
