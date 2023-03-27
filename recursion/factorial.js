let count = 0
function inception() {
  // base case
  if (count < 5) {
    count++
    return 'done'
  }

  // recursive case
  return inception()
}

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2
  }
  return number * findFactorialRecursive(number - 1)

  //   if(number > 0) {
  //     findFactorialRecursive(number) = number *  findFactorialRecursive(number-1);
  //     number--;
  //     return 'done'
  //   }
  //   return findFactorialRecursive(number)
}

function findFactorialIterative(number) {
  let result = 1
  for (let i = number; i > 0; i--) {
    result = result * i
  }
  return result
}

console.log(findFactorialRecursive(10))
