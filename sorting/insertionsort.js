// insert the number into the newly-generated array

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // time complexity:O(n)

    for (let j = i - 1; j >= 0; j--) {
      // time complexity:O(n/2)

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

let arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(insertionSort(arr)) // time complexity:O(n^2)
