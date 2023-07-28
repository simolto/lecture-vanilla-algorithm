function findPeaks(N, grid) {
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]
  let countPeaks = 0

  const newGrid = Array.from({ length: N + 2 }, () => Array(N + 2).fill(0))
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      newGrid[i][j] = grid[i - 1][j - 1]
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      let isPeak = true
      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k]
        const ny = j + dy[k]
        if (newGrid[i][j] <= newGrid[nx][ny]) {
          isPeak = false
          break
        }
      }
      if (isPeak) {
        countPeaks++
      }
    }
  }

  return countPeaks
}

console.log(
  findPeaks(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
)
