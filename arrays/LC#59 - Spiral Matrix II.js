// Leetcode medium - Solution using multiple pointers to set matrix boundaries

/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
*/

var generateMatrix = function(n) {
  let mat = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let count = 0;
  let size = n*n;
  let left = 0;
  let right = n-1;
  let top = 0;
  let bottom = n-1;

  while (count < size) {
      for (let i = left; i <= right; i++) {
          count++;
          mat[top][i] = count;
      }
      top++;

      for (let i = top; i <= bottom; i++) {
          count++;
          mat[i][right] = count;
      }
      right--;

      for (let i = right; i >= left; i--) {
          count++;
          mat[bottom][i] = count;
      }
      bottom--;

      for (let i = bottom; i >= top; i--) {
          count++;
          mat[i][left] = count;
      }
      left++;
  }
  return mat;
};

// This solution has a time complexity of O(n*n) since we populate all the cells of the n*n matrix
// This solution has a space complexity of O(n*n) since we store a new n*n matrix (or O(1) if we ignore the result matrix)