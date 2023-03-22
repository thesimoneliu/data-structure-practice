// Queues

// Arrays: slow delete & insert
// Linked lists:

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		// access the first one in the queue
		return this.first;
	}
	enqueue(value) {
		// add the last one to the queue
		const newNode = new Node(value);

		if (this.first === null) {
			this.first = newNode;
			this.last = this.first;
		} else {
			//let temp = this.last;
			this.last.next = newNode;
			this.last = newNode;
		}
		console.log(this);

		this.length++;
	}
	dequeue() {
		// remove the first in the queue
		if (this.first === null) {
			return null;
		}
		this.first = this.first.next;
		this.length--;
	}
	isEmpty() {
		if (this.length === 0) {
			return 'The Stack Is Empty';
		}
	}
}

const myQueue = new Queue();
myQueue.enqueue('Etroy');
myQueue.enqueue('Dtroy');
myQueue.enqueue('Ctroy');
myQueue.enqueue('Btroy');
myQueue.enqueue('Atroy');
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
