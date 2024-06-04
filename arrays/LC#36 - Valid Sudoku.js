// Leetcode medium - solution using two for loops and calculating the three conditions under the same loops

/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
      let rowSet = new Set();
      let colSet = new Set();
      let boxSet = new Set();
      for (let j = 0; j < 9; j++) {
          let currRow = board[i][j];
          let currCol = board[j][i];
          let currBox = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]

          if (currRow != '.') {
              if (rowSet.has(currRow)) return false;
              rowSet.add(currRow);
          }

          if (currCol != '.') {
              if (colSet.has(currCol)) return false;
              colSet.add(currCol);
          }

          if (currBox != '.') {
              if (boxSet.has(currBox)) return false;
              boxSet.add(currBox);
          }
      }
  }

  return true;
};

// This solution has a time complexity of O(n*n) since we go through every cell of the sudoku board, which is 9x9
// This solution has a space complexity of O(n) since we use exactly three sets that can be at most of size n 