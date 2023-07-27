function getCaseConvert(text) {
  const arr = [...text]
  return arr
    .map(v => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join('')
}

console.log(getCaseConvert('StuDY'))
