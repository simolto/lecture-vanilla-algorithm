function removeDuplicates(arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i)
}

console.log(removeDuplicates(['5', 'good', 'time', 'good', 'time', 'student']))
