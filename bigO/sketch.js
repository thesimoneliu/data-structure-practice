// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
	let a = 10; // O(1)
	a = 50 + 3; // O(1)

	for (let i = 0; i < input.length; i++) {
		// O(n)
		anotherFunction(); // O(n)
		let stranger = true; // O(n)
		a++; // O(n)
	}
	return a; // O(1)
}
funChallenge(input); // O( 1x3 + nx4 ) = O( 3 + 4n ) = O(n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
	let a = 5; // O(1)
	let b = 10; // O(1)
	let c = 50; // O(1)
	for (let i = 0; i < input; i++) {
		// O(n)
		let x = i + 1; // O(n)
		let y = i + 2; // O(n)
		let z = i + 3; // O(n)
	}
	for (let j = 0; j < input; j++) {
		// O(n)
		let p = j * 2; // O(n)
		let q = j * 2; // O(n)
	}
	let whoAmI = "I don't know"; // O(1)
}
anotherFunChallenge(input); // O( 4 + 8n ) = O(n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
	let a = 10; // O(1)
	a = 50 + 3; // O(1)

	for (let i = 0; i < input.length; i++) {
		// O(n)
		anotherFunction(); // O(n x (4+8n)) = O( 4n + 8n^2 )
		let stranger = true; // O(n)
		a++; // O(n)
	}
	return a; // O(1)
}
function anotherFunChallenge(input) {
	let a = 5; // O(1)
	let b = 10; // O(1)
	let c = 50; // O(1)
	for (let i = 0; i < input; i++) {
		// O(n)
		let x = i + 1; // O(n)
		let y = i + 2; // O(n)
		let z = i + 3; // O(n)
	}
	for (let j = 0; j < input; j++) {
		// O(n)
		let p = j * 2; // O(n)
		let q = j * 2; // O(n)
	}
	let whoAmI = "I don't know"; // O(1)
}
funChallenge(input); // O( 1x3 + nx3 + 4xn + 8xn^2 ) = O( 3 + 7n + 8n^2) = O(n^2)


// EXERCISE 1: LOG ALL PAIRS OF THE ARRAY

const boxes = [1, 2, 3, 4, 5];

// solution 1
for (let i = 0; i < boxes.length; i++) {
	let a = boxes[i];
	for (let j = 0; j < boxes.length; j++) {
		if (j !== 1) {
			let b = boxes[j];
		}
		console.log(a, b + '  ');
	}
}

// solution 2 in JS ES6
boxes.forEach((item) => {
	boxes.forEach((object) => {
		console.log(item + object);
	});
});

// EXERCISE 2: JAVASCRIPT LOOPS - CODE READABILITY
const array = ['nemo', 'fino', 'gibbie', 'crab', 'thunder'];

// syntax 1
function findNemo(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'Nemo') {
			console.log('Find Nemo!');
		}
	}
}

// syntax 2
function findNemo2 = array => {
	array.forEach((fish) => {
		if (fish === 'Nemo') {
			console.log('Find Nemo!');
		}
	});
}

// syntax 3
function findNemo2(array) {
	for (let fish of array)
		if (fish === 'Nemo') {
			console.log('Find Nemo!');
		}
}
