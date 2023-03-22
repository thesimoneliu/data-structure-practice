// Implementing an array

class MyArray {
	constructor() {
		// the core of an ARRAY is an OBJECT with an index
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
	}

	pop() {
		delete this.data[this.length - 1];
		this.length--;
	}

	delete(index, number) {
		if (number == null || number < 1 || Number.isInteger(number) === false) {
			number = 1;
		}
		this.shift(index, number);
	}

	shift(index, number) {
		if (number < this.length + 1) {
			for (let i = index; i < this.length - number; i++) {
				this.data[i] = this.data[i + number];
			}
			delete this.data[this.length - number];
			this.length -= number;
		} else {
			this.length = 0;
			this.data = {};
		}
	}

	toString() {
		let string = '';
		for (let i = 0; i < this.length; i++) {
			string += this.data[i] + ' ';
		}
		return string;
	}
}

const newArray = new MyArray();
// console.log(newArray.get(0));

newArray.push('hey');
newArray.push('!');
newArray.push('this');
newArray.push('are');
newArray.push('smelly');
newArray.push('bees');
// newArray.pop();
newArray.push('is');
newArray.push('a');
newArray.push('watermelon');
newArray.push('pear');
console.log(newArray);

newArray.delete(3, 3);
console.log(newArray, newArray.toString());
