// {
// 	key: 1;
// 	value: apple;
// 	pointer: 2;
// }

// {
// 	value: apple;
// 	next:{
// 		value:pear;
// 		next:{
// 			value:banana;
// 			next:null;
// 		};
// 	};
// }

/* -------------------------------------------------------- */
/* ------------------ Singly Linked List ------------------ */
/* -------------------------------------------------------- */

class Node {
	constructor(value) {
		(this.value = value), (this.next = null);
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		// add a value to the linked list
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value) {
		// add a value to the beginning of the linked list
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	insert(index, value) {
		const newNode = new Node(value);

		// check input
		if (index >= this.length) {
			this.append(value);
		}
		if (index === 0) {
			this.prepend(value);
		}

		/* METHOD 1: MY ORIGINAL ANSWER */
		let currentNode = this.head;
		let counter = 0;
		while (currentNode) {
			if (index === counter + 1) {
				newNode.next = currentNode.next;
				currentNode.next = newNode;
				this.length++;
				break;
			}
			currentNode = currentNode.next;
			counter++;
		}
		/* ----- WHY IS IT WRONG? ----- */
		/* because there's no sequence in the linked list, when traversing, we should focus on the pointer, not the sequence.
		doing in this way, the previous node's pointer is pointing to the same place */

		// while (currentNode) {
		// 	if (index === counter) {
		// 		newNode.next = currentNode;
		// 		currentNode = newNode;
		// 		break;
		// 	}
		// 	currentNode = currentNode.next;
		// 	counter++;
		// }

		/* METHOD 2: MORE READABILITY & CLEARER LOGIC */
		// const leader = this.traverseToIndex(index-1); // get the previous node
		// const pointerToNext = leader.next;
		// leader.next = newNode; // new pointer
		// newNode.next = pointerToNext;
		// this.length++;

		// traverseToIndex(index) {
		// 	let counter = 0;
		// 	let currentNode = this.head;
		// 	while(counter !== index){
		// 		currentNode = currentNode.next;
		// 		counter++;
		// 	}
		// 	return currentNode;
		// }
	}

	remove(index) {
		const leader = this.traverseToIndex(index - 1); // get the previous node
		const follower = this.traverseToIndex(index + 1);
		leader.next = follower;
		this.length--;
	}

	reverse() {
		// check extreme case
		if (!this.head.next) {
			return this.head;
		}

		// console.log(this.length);
		let lastNode = this.traverseToIndex(this.length - 1);
		let reversedLinkedList = new Node(lastNode.value);

		/* METHOD 1, START FROM THE LAST ONE */
		let count = 2;
		let previousNode = reversedLinkedList;
		while (count <= this.length) {
			let currentNode = this.traverseToIndex(this.length - count);
			previousNode.next = currentNode;
			previousNode = currentNode;
			count++;
		}
		return reversedLinkedList;

		/* METHOD 2, PREPEND BACKWARDS */
		const listArray = this.printList();
		for (let i = 1; i < this.length; i++) {
			this.prepend(listArray[i]);
			let removeIndex = i < this.length - 1 ? i + 1 : i;
			this.remove(removeIndex);
			// console.log(i, this, this.printList());
		}

		/* METHOD 3, first second switch */
		let first = this.head;
		this.tail = this.head;
		let second = first.next;
		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
//console.log(myLinkedList.printList());
const reversedLinkedList = myLinkedList.reverse();

/* -------------------------------------------------------- */
/* ------------------ Doubly Linked List ------------------ */
/* -------------------------------------------------------- */

class DoublyNode {
	constructor(value) {
		(this.value = value), (this.next = null), (this.prev = null);
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		// add a value to the linked list
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value) {
		// add a value to the beginning of the linked list
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
	}

	insert(index, value) {
		const newNode = new Node(value);

		// check input
		if (index >= this.length) {
			this.append(value);
		} else if (index === 0) {
			this.prepend(value);
		}

		const leader = this.traverseToIndex(index - 1); // get the previous node
		const follower = leader.next;
		leader.next = newNode; // new pointer
		newNode.prev = leader;
		// fix next and prev
		newNode.next = follower;
		follower.prev = newNode;
		this.length++;
	}

	remove(index) {
		const leader = this.traverseToIndex(index - 1); // get the previous node
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		unwantedNode.next.prev = leader;
		this.length--;
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.prepend(1);
