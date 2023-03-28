// bubble up the largest number

// space complexity: O(1)
function bubbleSort(arr) {
  for (let j = arr.length; j > 0; j--) {
    // time complexity: O(n)
    for (let i = 0; i < j; i++) {
      // time complexity: O(n/2)
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
      }
    }
    console.log('iterate', arr)
  }
  return arr
}

let arr = [6, 5, 3, 1, 8, 7, 2, 4]
console.log(bubbleSort(arr)) // time complexity: O(n^2)
