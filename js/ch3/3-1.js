function isPalindrome(text) {
  const a = text.toLowerCase().split('').join('')
  const b = text.toLowerCase().split('').reverse().join('')

  return a === b ? 'YES' : 'NO'
}

console.log(isPalindrome('gooG'))
