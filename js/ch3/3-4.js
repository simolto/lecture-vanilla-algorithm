function findMinDistances(s, t) {
  const result = []
  let prevPos = -Infinity

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) prevPos = i
    result.push(Math.min(i - prevPos, Math.abs(i - s.lastIndexOf(t))))
  }

  return result.join('')
}

console.log(findMinDistances('teachermode', 'e'))
