/*
A left rotation operation on an array of size n shifts each of
 the array's elements 1 unit to the left. Given an integer, d, rotate
  the array that many steps left and return the result.
*/

function rotLeft(a, d) {
  const len = a.length;
  const mod = d % len;
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr[i] = a[(mod+i)%len];
  }
  return arr;
}


arr = [1,2,3,4,5,6,7,8,9];
d = 3;

console.log(rotLeft(arr, d));

// Time comp: O(n);
// Space comp: O(n); Would be O(1) space with in-place swapping