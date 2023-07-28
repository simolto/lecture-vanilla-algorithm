function getWinner(num, userA, userB) {
  const result = []

  for (let i = 0; i < num; i++) {
    if (userA[i] === userB[i]) result.push('C')
    else if (
      (userA[i] === 1 && userB[i] === 3) ||
      (userA[i] === 2 && userB[i] === 1) ||
      (userA[i] === 3 && userB[i] === 2)
    )
      result.push('A')
    else result.push('B')
  }
  return result
}

console.log(getWinner(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]))
