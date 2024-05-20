// Leetcode medium - solution iterating over the matrix and using two sets

/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
*/

var setZeroes = function(matrix) {
  let zeroRows = new Set();
  let zeroCols = new Set();
  
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] == 0) {
              zeroRows.add(i);
              zeroCols.add(j);
          }
      }
  }
  
  for (const row of zeroRows) {
      for (let i = 0; i < matrix[0].length; i++) {
          matrix[row][i] = 0;
      }
  }
  
  for (const col of zeroCols) {
      for (let i = 0; i < matrix.length; i++) {
          matrix[i][col] = 0;
      }
  }
};

// This solution has a time complexity of O(n*m), n being the number of rows and m being the number of columns
// since we do a full pass through the entire matrix
// This solution has a space complexity of O(n+m) since we have two sets, one containing the rows that must be
// set to zero and the other containing the columns that must be set to zero.