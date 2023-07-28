function countVisibleStudents(num, arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) count++
  }
  return count
}

console.countVisibleStudents(log(8, [130, 135, 148, 140, 145, 150, 150, 154]))
