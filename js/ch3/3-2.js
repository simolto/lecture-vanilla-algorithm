function isPalindrome(text) {
  const a = text.toLowerCase().replace(/[^a-z]/g, '')
  const b = a.split('').reverse().join('')
  return a === b ? 'YES' : 'NO'
}

console.log(isPalindrome('found7, time: study; Yduts; emit, 7Dnuof'))
