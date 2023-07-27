function matchStringLength(text, str) {
  return text.match(new RegExp(str, 'g')).length
}

console.log(matchStringLength('COMPUTERPROGRAMMING', 'R'))
