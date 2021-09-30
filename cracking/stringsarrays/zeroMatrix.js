/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.
*/

function zeroMatrix(mat) {
  const indices = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] == 0) indices.push([i,j]);
    }
  }

  for (const index of indices) {
    transformToZero(mat, index);
  }

  return mat;
}

function transformToZero(mat, index) {
  const [row, col] = index;
  const rowEnd = mat.length;
  const colEnd = mat[0].length;
  for (let i = row; i >= 0; i--) {
    mat[i][col] = 0;
  }
  for (let i = row; i < rowEnd; i++) {
    mat[i][col] = 0;
  }
  for (let i = col; i >= 0; i--) {
    mat[row][i] = 0;
  }
  for (let i = col; i < colEnd; i++) {
    mat[row][i] = 0;
  }
}

let mat = [
  [1, 2, 3, 0],
  [5,78,3,1],
  [1,0,4,6],
  [1,9,7,4]
]

//Time comp: O(n * m) -- n and m being the width and the height of the matrix
//Space comp: O(m) -- m being the number of zeroes in the matrix

/*
- one way to solve this is to use a copy matrix where the 
  operations of converting the row and column in 0 will be
  executed. Don't currently know how to do it in place.
- Well, a first pass might be done to store where the indices
  of the 0 cells are located and then another pass to convert
  the rows and columns into 0
*/