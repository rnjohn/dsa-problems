/*
Write a function that takes in a "special" array and returns its product sum.

A "special" array is a non-empty array that contains either integers or other
"special" arrays. The product sum of a "special" array is the sum of its elements,
where "special" arrays inside it are summed themselves and then multiplied by 
their level of depth.

The depth of a "special" array is how far nested it is. For instance, the depth
of [] is 1; the depth of the inner array in [[]] is 2; the depth of the innermost
array in [[[]]] is 3.

Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is
x + 2 * (y + z); the product sum of [x, [y, [z]]] is x + 2 * (y + 3z).
*/

function productSum(array) {
  return getSum(array, 1);
}

function getSum(array, multiplier) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += getSum(array[i], multiplier + 1);
    } else {
      sum += array[i];
    }
  }
  return sum * multiplier
}

// Time comp: O(n) -- n being the elements in the array (including sub-elements)
// Space comp: O(d) -- d being the multiplier of the innermost special array