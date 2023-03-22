class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);

		if (!this.root) {
			this.root = newNode;
		} else if (this.root.value === value) {
			// check input
			console.log('this value already existed');
		} else {
			// main
			let currentNode = this.root;
			while (true) {
				// true means keep looping
				if (newNode.value > currentNode.value) {
					// right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				} else {
					// left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				}
			}
		}
	}

	lookup(value) {
		if (!this.root) {
			return "this value doesn't exist";
		} else {
			let currentNode = this.root;
			while (currentNode) {
				if (value === currentNode.value) {
					return currentNode;
				} else {
					currentNode =
						value > currentNode.value ? currentNode.right : currentNode.left;
				}
			}
			return "this value doesn't exist";
		}
	}

	remove(value) {}
}

/* --------------
        9
      4    20
    1  6 15  170
 --------------- */

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(21));

function traverse(node) {
	//recursion
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
