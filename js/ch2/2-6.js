function findMaxSum(N, grid) {
  let maxSum = 0

  for (let i = 0; i < N; i++) {
    let rowSum = 0
    for (let j = 0; j < N; j++) {
      rowSum += grid[i][j]
    }
    maxSum = Math.max(maxSum, rowSum)
  }

  for (let j = 0; j < N; j++) {
    let colSum = 0
    for (let i = 0; i < N; i++) {
      colSum += grid[i][j]
    }
    maxSum = Math.max(maxSum, colSum)
  }

  let diagonalSum1 = 0
  for (let i = 0; i < N; i++) {
    diagonalSum1 += grid[i][i]
  }
  maxSum = Math.max(maxSum, diagonalSum1)

  let diagonalSum2 = 0
  for (let i = 0; i < N; i++) {
    diagonalSum2 += grid[i][N - i - 1]
  }
  maxSum = Math.max(maxSum, diagonalSum2)

  return maxSum
}

console.log(
  findMaxSum(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
)
