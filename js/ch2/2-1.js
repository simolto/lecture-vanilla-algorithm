function getLargerThanPrevious(num, arr) {
  const result = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    if (num <= arr[i]) result.push(arr[i])
  }
  return result
}

console.log(getLargerThanPrevious(6, [7, 3, 9, 5, 6, 12]))
