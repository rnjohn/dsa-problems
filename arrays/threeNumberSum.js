/*
Write a function that takes in a non-empty array of distinct integers and an integer 
representing a target sum. The function should find all triplets in the array that sum 
up to the target sum and return a two-dimensional array of all these triplets. The 
numbers in each triplet should be ordered in ascending order, and the triplets themselves 
should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array.
*/

function threeNumberSum() {
	if (array.length < 3) return [];
	
	array.sort((a,b) => a - b);
	
	const result = [];
	
	for (let i = 0; i < array.length - 2; i++) {
		let leftIndex = i + 1;
		let rightIndex = array.length - 1;
		while (leftIndex < rightIndex) {
			const current = array[i]+array[leftIndex]+array[rightIndex];
			if (current == targetSum) {
				result.push([array[i], array[leftIndex], array[rightIndex]]);
				leftIndex++;
				rightIndex++;
			} else if (current < targetSum) {
				leftIndex++;
			} else {
				rightIndex--;
			}
		}
		
	}
	return result;
}

//Time comp: O(n^2) -- n being the length of the input array
//Space comp: O(n) -- n being the length of the input array

/*
  - the first thing that comes to my mind is using three
  for loops, and storing the indices in some aux array and
  sort them later, that would give O(n^3) time O(m) space
  (m being the amount of triplets that fulfill the condition)
  - another option is to sort the array and then traverse over
  each element, use three pointers(one starting next to the current index
	and one starting at the end of the array) and sum them, if it's
  greater than the target, decrease the right index, if it's lower
  than the target, increase the left index. Once a triplet is
  found then it is stored in an array
*/