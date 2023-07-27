function removeDuplicateString(text) {
  const charSet = new Set()

  let result = ''
  for (let v of text) {
    if (!charSet.has(v)) {
      charSet.add(v)
      result += v
    }
  }
  return result
}

console.log(removeDuplicateString('ksekkset'))
