// find the smallest number and pop it into the first one

function selectionSort1(arr) {
  let index = 0
  for (let j = 0; j < arr.length - 2; j++) {
    //time complexity: O(n)
    let min = arr[j]
    for (let i = j; i < arr.length; i++) {
      // time complexity: O(n/2)
      if (arr[i] < min) {
        min = arr[i]
        index = i
      }
    }

    arr.splice(index, 1) // time complexity: O(n)
    arr.splice(j, 0, min) // time complexity: O(n)
  }
  return arr
}

function selectionSort2(arr) {
  for (let j = 0; j < arr.length; j++) {
    min = j
    let temp = arr[min]
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[min]) {
        min = i
      }
    }
    arr[j] = arr[min]
    arr[min] = temp // time complexity: O(1)
  }
  return arr
}

let arr = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7]
console.log(selectionSort1(arr)) // time complexity: O(n*(n/2+2n))=O(n^2)
console.log(selectionSort2(arr)) // time complexity: O(n^2)
