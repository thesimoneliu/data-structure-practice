// Stacks

// think of priority and purpose
// Arrays: no pointer
// Linked lists: pointer, backwards search, no need to know the order

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack_In_Linked_List {
	constructor() {
		this.top = null; // last or previous
		this.bottom = null; // first or the earliest
		this.length = 0;
	}
	peek() {
		// access top element
		return this.top;
	}
	push(value) {
		// add node to the top of the stack
		const newNode = new Node(value);

		if (this.top === null) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}

		this.length++;
		return this;
	}
	pop() {
		// remove the top of the stack
		if (!this.top) {
			return null;
		}
		this.top = this.top.next;
		this.length--;
	}
	isEmpty() {
		if (this.length === 0) {
			return 'The Stack Is Empty';
		}
	}
}

const myStack = new Stack_In_Linked_List();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(30);
myStack.push(53);
console.log(myStack);
myStack.pop();
console.log(myStack.peek());

class Stack_In_Array {
	constructor() {
		this.array = []; // why not this = [] ?
	}
	peek() {
		// access top element
		return this.array[this.array.length - 1];
	}
	push(value) {
		// add node to the top of the stack
		this.array.push(value);
	}
	pop() {
		// remove the top of the stack
		this.array.pop();
	}
	isEmpty() {
		if (this.array.length === 0) {
			return 'The Stack Is Empty';
		}
	}
}

const myStack2 = new Stack_In_Array();
myStack2.push(1);
myStack2.push(2);
myStack2.push(3);
myStack2.push(30);
myStack2.push(53);
console.log(myStack2);
myStack2.pop();
console.log(myStack2.peek());
