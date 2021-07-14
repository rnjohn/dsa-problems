/*
Sales by Match.

There is a large pile of socks that must be paired by color.
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.
*/

function sockMerchant(n, ar) {
  let socks = new Set();
  let acum = 0;
  ar.forEach(value => {
     if (!socks.has(value)) {
         socks.add(value);
     } else {
       socks.delete(value);
       acum++;
     }
  });
  return acum;
}

// Time comp: O(n) --n being the size of ar
// Space comp: O(m) --m being the size of socks