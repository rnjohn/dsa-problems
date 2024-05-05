/*
Given an m x n 2D binary grid grid which represents a map of '1's (land)
and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent
lands horizontally or vertically. You may assume all four edges of the
grid are all surrounded by water.
*/

function numberOfIslands(grid) {
  const height = grid.length;
  const width = grid[0].length;
  let accum = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === '1') {
        accum++;
        removeIsland(grid, i, j);
      }
    }
  }
  return accum;
}

function removeIsland(grid, x, y) {
  grid[x][y] = '0';
  if (x > 0 && grid[x-1][y] === '1') removeIsland(grid, x - 1, y);
  if (x < grid.length - 1 && grid[x+1][y] === '1') removeIsland(grid, x + 1, y);
  if (y > 0 && grid[x][y-1] === '1') removeIsland(grid, x, y - 1);
  if (y < grid[0].length - 1 && grid[x][y+1] === '1') removeIsland(grid, x, y + 1);
}

// Time comp: O(n*m) -- n and m being the height and the width of the matrix
// Space comp: O(n*m) -- n and m being the height and the width of the matrix
