function isEqual(a, b) {
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  
  return true
}

function isNumber(i) {
    return (i >= '0' && i <= '9')
}

function isLetter(i) {
    return ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'))
}

function palindrome(str) {
  let arr = []

  for (let x in str) {
    if (isNumber(str.charAt(x)) || isLetter(str.charAt(x))) {
      arr.push(str.charAt(x).toLowerCase())
    }
  }

  let brr = [...arr].reverse()

  return isEqual(arr, brr)
}

palindrome("A man, a plan, a canal. Panama")
