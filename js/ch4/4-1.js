function findMaxDigitSumNumber(num, arr) {
  const digitSums = arr.map(v =>
    v
      .toString()
      .split('')
      .reduce((sum, digit) => (sum += parseInt(digit)), 0)
  ) // [11, 10, 9, 4, 8, 11, 6]

  const max = Math.max(...digitSums) // 11
  const maxIndices = digitSums.reduce((indices, value, index) => {
    if (value === max) {
      indices.push(index)
    }
    return indices
  }, []) // [0, 5]

  const maxElements = maxIndices.reduce((maxArr, index) => {
    maxArr.push(arr[index])
    return maxArr
  }, []) // [128, 137]

  const result = Math.max(...maxElements)
  return result
}

console.log(findMaxDigitSumNumber(7, [128, 460, 603, 40, 521, 137, 123]))
