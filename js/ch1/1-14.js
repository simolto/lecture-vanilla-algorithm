function getLongestString(arr) {
  return arr.reduce(
    (prev, curr) => (prev.length < curr.length ? curr : prev),
    ''
  )
}

console.log(
  getLongestString(['5', 'teacher', 'time', 'student', 'beautiful', 'good'])
)
