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
		const NEW_NODE = new Node(value);

		if (!this.root) {
			this.root = NEW_NODE;
		} else if (this.root.value === value) {
			// check input
			console.log('this value already existed');
		} else {
			// main
			let currentNode = this.root;
			while (true) {
				// true means keep looping
				if (NEW_NODE.value > currentNode.value) {
					// right
					if (!currentNode.right) {
						currentNode.right = NEW_NODE;
						return this;
					}
					currentNode = currentNode.right;
				} else {
					// left
					if (!currentNode.left) {
						currentNode.left = NEW_NODE;
						return this;
					}
					currentNode = currentNode.left;
				}
			}
		}
	}

	lookup(value) {
		if (!this.root) {
			return false; // "this value doesn't exist"
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
			return false; // "this value doesn't exist"
		}
	}

	remove(value) {
		if (!this.root) {
			return false; // 'this tree is empty';
		} else if (this.lookup(value) === false) {
			return 'Cannot remove a value that is not existed';
		} else {
			let currentNode = this.root;
			while (currentNode) {
				// if found
				if (value === currentNode.value) {
					if (!currentNode.right) {
						// if this is the last node, delete it
						currentNode = null; // or delete currentNode?
						return this;
					} else {
						// if this is not the last node
						let removedNode = currentNode;
						currentNode = currentNode.right; // set the next right Node as the new root
						let replacedNode = currentNode;
						while (replacedNode.left) {
							replacedNode = replacedNode.left;
						}
						replacedNode.left = removedNode.left;
						replacedNode.right = removedNode.right;
						removedNode = replacedNode;
						replacedNode = null;
						return this;
					}
				} else {
					// if not found, continue looping
					currentNode =
						value > currentNode.value ? currentNode.right : currentNode.left;
				}
			}
		}
	}
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
tree.remove(2);
tree.remove(20);
//console.log(tree.lookup(21));
console.log(tree);
// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
	//recursion
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
