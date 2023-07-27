function getCountNum(num, arr) {
  return arr.filter(v => v % 10 == num).length
}

console.log(getCountNum(3, [25, 23, 11, 27, 53, 17, 33]))
console.log(getCountNum(0, [12, 20, 54, 30, 87, 91, 30]))
