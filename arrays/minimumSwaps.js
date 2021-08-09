// You are given an unordered array consisting of 
// consecutive integers  [1, 2, 3, ..., n] without any 
// duplicates. You are allowed to swap any two elements. 
// Find the minimum number of swaps required to sort the 
// array in ascending order.

function minimumSwaps(arr) {
  let accum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i+1) {
      let idx = -1;
      for (let j = i; j < arr.length; j++) {
        if (arr[j] == i+1) {
          idx = j;
          break;
        }
      }
      arr[idx] ^= arr[i];
      arr[i] ^= arr[idx];
      arr[idx] ^= arr[i];
      accum++;
    }
  }
  return accum;
}

// Time comp: O(n^2) -- n^2 because we iterate over the array and when a number is not in 
// place, we search the index of the corresponding number, which takes another O(n) in the worst case
// Space comp: O(1) -- because the only added variable is the accumulator

// There is also a solution in O(n) time
// https://github.com/brianr482/coding-interview-problems/blob/master/arrays-strings/min-swaps-2.js