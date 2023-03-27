function fibonacciIterative(n) {
  let arr = [0, 1]

  // check input
  if (/^[1-9]\d*$/.test(n) === false) {
    return 'error'
  }
  // main
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n], arr // array insert, time complexity: O(1)
}

// fibonacciIterative(10)

function fibonacciRecursive(n) {
  // check input
  if (/^[1-9]\d*$/.test(n) === false) {
    return 'error'
  }

  // base case
  if (n <= 2) {
    return n - 1
  }

  // recursive base
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2) // time complexity: O(2^n)
}
console.log(fibonacciRecursive(1))
console.log(fibonacciRecursive(2))
console.log(fibonacciRecursive(3))
console.log(fibonacciRecursive(8))
