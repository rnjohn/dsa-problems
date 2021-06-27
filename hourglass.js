/* Given a  2D Array, arr:
An hourglass in A is a subset of values with indices falling
in this pattern in arr's graphical representation:

a b c
  d
e f g

There are 16 hourglasses in arr. An hourglass sum is the 
sum of an hourglass' values. Calculate the hourglass 
sum for every hourglass in arr, then print the maximum hourglass sum. 
The array will always be 6x6.
*/ 

function hourglassSum(arr) {
  let max = 0;
  let top = arr.length - 2;
  for (let i = 0; i < top; i++) {
    for (let j = 0; j < top; j++) {
      let currSum = findHourglassSum(arr, i, j);
      if (currSum > max) max = currSum;
    }
  }
  return max;
}

function findHourglassSum(arr, startRow, startCol) {
  let acum = 0;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (i == startRow + 1 && (j == startCol || j == startCol + 2)) continue;
      acum += arr[i][j];
    }
  }
  return acum;
}

// Time comp: O(1) -- if it's always 6x6, if it isn't then it's O(n^2), n being the side of the matrix
// Space comp: O(1)