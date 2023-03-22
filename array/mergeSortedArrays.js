// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0,3,4,4,6,30,31]

const arr1 = [0, 3, 4, 9, 15, 31];
const arr2 = [4, 7, 30];

/* 
Method 1
    merge 2 arrays into one: 
        arr.join() + str.split()
    sort the new array
*/

function mergeSortedArrays(arr1, arr2) {
	//merge 2 arrays into one
	let str1 = arr1.join();
	let str2 = arr2.join();
	let str = str1 + ',' + str2;
	let arr = str.split(',');
	// console.log(str1, str2, str, arr);

	for (let i = 0; i < arr.length; i++) {
		arr[i] = Number(arr[i]);
	}

	for (let j = 0; j < arr.length; j++) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				let k = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = k;
			}
		}
	}

	return arr;
}

// console.log(mergeSortedArrays(arr1, arr2));
// console.log(mergeSortedArrays(arr2, arr1));

// sort()
// const arrtest = [0, 3, 4, 1, 2, 10, 5];
// console.log(arrtest.sort());

/* 
Method 2
    sort two arrays first
    compare each item and put them into a new array based on comparison
*/

function mergeSortedArrays2(arr1, arr2) {
	sortArray(arr1);
	sortArray(arr2);

	const arr = [];

	let i = 0;
	let j = 0;
	let arr1_item = arr1[i];
	let arr2_item = arr2[j];

	// check input
	if (arr1.length === 0) {
		return arr2;
	}
	if (arr2.length === 0) {
		return arr1;
	}
	if (arr1.length > arr2.length) {
	}

	// loop until all elements are pushed into the new array
	while (arr1_item || arr2_item) {
		console.log(arr1_item, arr2_item, arr);
		// compare one by one
		if (!arr2_item || arr1_item < arr2_item) {
			arr.push(arr1_item);
			i++;
			arr1_item = arr1[i];
		} else {
			arr.push(arr2_item);
			j++;
			arr2_item = arr2[j];
		}
	}

	return arr;
}

function sortArray(arr) {
	arr.sort(function (a, b) {
		return a - b;
	});
}

console.log(mergeSortedArrays2(arr1, arr2));
