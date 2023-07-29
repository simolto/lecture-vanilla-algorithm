function compressString(text) {
  return text.replace(/(.)\1+/g, (match, p1) => `${p1}${match.length}`)
}

console.log(compressString('KKHSSSSSSSE'))
