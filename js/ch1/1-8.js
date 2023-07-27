function findSevenDwarfs(arr) {
  const total = arr.reduce((prev, curr) => prev + curr, 0)

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sumExcludingTwoDwarfs = total - arr[i] - arr[j]
      if (sumExcludingTwoDwarfs === 100) {
        return arr.filter((value, index) => index !== i && index !== j)
      }
    }
  }
}

console.log(findSevenDwarfs([20, 7, 23, 19, 10, 15, 25, 8, 13]))
