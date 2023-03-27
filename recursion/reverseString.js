//Implement a function that reverses a string using iteration...and then recursion!

function reverseString(str) {
  return str.split('').reverse().join('')
}

function reverseStringIteration(str) {
  let reversedArr = []
  for (let i = str.length - 1; i >= 0; i--) {
    reversedArr.push(str[i])
  }
  return reversedArr.join('')
}

function reverseStringRecursion(str) {
  if (str === '') {
    return ''
  } else {
    return reverseStringRecursion(str.substr(1)) + str.charAt(0)
  }
}

console.log(reverseStringRecursion('yoyo mastery'))
//should return: 'yretsam oyoy'
