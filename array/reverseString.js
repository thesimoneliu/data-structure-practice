// create a function that reverses a string
// 'Hi My name is Andrei'
// 'ierdnA si eman yM iH'

const str = 'Hi My name is Andrei';

/* 
Method 1
    split the string into an arr and put it into a new one
        str.split('')
    convert the new arr into string
        arr.toString().replaceAll()
*/
function reverseStr(str) {
	// check input
	if (!str || str.length < 2 || typeof str !== 'string') {
		console.log('error');
		return 'error';
	}

	// split the string
	const arr = str.split('');
	const reversedArr = [];

	// reassign to a new arr
	for (let i = 0; i < arr.length; i++) {
		reversedArr[i] = arr[arr.length - 1 - i];
	}

	// convert the arr to string and replace the commas
	let reversedStr = reversedArr.toString().replaceAll(',', '');
	return reversedStr;
}

console.log(reverseStr(str));

/* 
Method 2
    create a new array directly from the string
        str.length
        str[i]
        arr.push()
    convert the new array into string
        arr.join('')
*/

function reverseStr2(str) {
	const reverseArr2 = [];
	const reverseArr2Len = str.length - 1;

	for (let i = reverseArr2Len; i >= 0; i--) {
		reverseArr2.push(str[i]);
	}

	return reverseArr2.join('');
}

console.log(reverseStr2(str));

/* 
Method 3
    convert the string into array
        str.split()
    reverse the array directly 
        arr.reverse()
    convert the new array into string
        arr.join('')
*/

function reverseStr3(str) {
	return str.split('').reverse().join('');
}
console.log(reverseStr3(str));

/* 
Method 4
    JS ES6 function syntax
*/

const reverseStr4 = (str) => str.split('').reverse().join('');
console.log(reverseStr4(str));
