const nums = [2, 7, 11, 15];
const target = 9;

/* ---------------------- Method 1: Brute Force ---------------------- 

	检验每一个 pairs 的总和 - Array Search

	readability: easy
	time: O(n^2)
	space: O(1)
---------------------- ---------------------- ---------------------- */

var twoSum = function (nums, target) {
	const outputArray = [];

	// check input
	if (nums.length === 0) {
		return 'Nums is empty!';
	}

	// two loops
	for (let i = 0; i < nums.length - 1; i++) {
		// O(n-1)
		for (let j = i + 1; j < nums.length; j++) {
			// O(n-1)
			if (i !== j && i < j) {
				if (nums[i] + nums[j] == target) {
					console.log(nums[i], nums[j]);
					outputArray.push(i, j);
				}
			}
		}
	} //O(n^2)

	return outputArray;
};

//console.log(twoSum(nums, target));

/* ---------------------- Method 2: Hash Map ---------------------- 

	在从前的减数里找是否有相等 - Hash Table Search

	time: 
	space: 
---------------------- ---------------------- ---------------------- */

var twoSum1 = function (nums, target) {
	const map = {};

	// check input
	if (nums.length === 0) {
		return 'Nums is empty!';
	}

	// hash map
	// map: {
	// 	complement: nums[i];
	// 	index: i;
	// }

	for (let i = 0; i < nums.length; i++) {
		// let complement = target - nums[i];
		// map[complement] = i;
		// if (complement == nums[i + 1]) {
		// 	return [map[complement], i];
		// }

		let value = nums[i];
		let complement = target - nums[i];
		console.log(map[complement]);
		if (map[complement] !== undefined) {
			return [map[complement], i];
		} else {
			map[value] = i;
		}
	}
};

console.log(twoSum1(nums, target));
