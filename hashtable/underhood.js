/*
hash = {
    key: value;
}
*/

class HashTable {
	constructor(size) {
		this.data = new Array(size); // now data is an array with (size) instances
		console.log(this.data);
	}

	// hash function
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		let key_address = this._hash(key);
		if (!this.data[key_address]) {
			this.data[key_address] = [];
		}
		// this.data[key_address] = [key, value];
		// key_address here is the order index of the array
		this.data[key_address].push(key, value);
		console.log(this.data, key_address);
	}

	get(key) {
		let key_address = this._hash(key);
		const currentBucket = this.data[key_address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
	}

	keys() {
		let keysArray = [];
		for (let i = 0; i < size; i++) {
			if (this.data[i]) {
				let subArrLength = this.data[i].length;
				if (subArrLength <= 1) {
					keysArray.push(this.data[i][0]);
				} else {
					for (let j = 0; j < subArrLength; j++) {
						keysArray.push(this.data[i][j][0]);
					}
				}
			}
		}
		return keysArray;
	}
}

const myHashtable = new HashTable(50);
myHashtable.set('i', 10000);
myHashtable.set('love', 'ohij');
myHashtable.set('love23', 'asfoisodfk');
myHashtable.set('66as6', 'hi there is a graps');
console.log(myHashtable.get('love23'));
