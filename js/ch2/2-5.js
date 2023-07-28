// case1
function calculateRanks(num, arr) {
  const result = Array.from({ length: num }, () => 1)

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (arr[j] > arr[i]) result[i]++
    }
  }
  return result
}

// case2
function calculateRanks2(num, arr) {
  const sortedArr = arr.slice().sort((a, b) => b - a)
  return arr.map(v => sortedArr.indexOf(v) + 1)
}

console.log(calculateRanks(5, [87, 89, 92, 100, 76]))
console.log(calculateRanks2(5, [87, 89, 92, 100, 76]))
