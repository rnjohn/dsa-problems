//TODO

function rotateMatrix(mat) {
  const n = mat.length;
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      const top = mat[first][i];
      mat[first][i] = mat[last-offset][first];
      mat[last-offset][first] = [last][last-offset];
      mat[last][last-offset] = mat[i][last]
      mat[i][last] = top;
      // console.log(mat)
    }
  }
  return true
}

const mat = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

/*
- to rotate a matrix, we can rotate by layers
*/