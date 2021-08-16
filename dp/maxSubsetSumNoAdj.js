/*
Write a function that takes in an array of positive integers and returns
the maximum sum of non-adjacent elements in the array.

If the input array is empty, the function should return 0.
*/

function maxSubsetSum(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return Math.max(arr[0], arr[1]);

  let second = arr[0];
  let first = Math.max(arr[0], arr[1]);
  let curr;

  for (let i = 0; i < arr.length; i++) {
    curr = Math.max(first, second + arr[i]);
    second = first;
    first = curr;
  }

  return curr;
}

// Time comp: O(n) -- n being the size of the input array
// Space comp: O(1)