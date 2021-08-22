/*
This question is asked by Amazon. Given a string representing your stones and another
string representing a list of jewels, return the number of stones that you have that are also jewels.
*/

function jewelsStones(stones, jewels) {
  let set = new Set();
  let jewelArray = jewels.split('');
  let count = 0;
  for (let i = 0; i < jewelArray.length; i++) {
    if (stones.includes(jewelArray[i]) && !set.has(jewelArray[i])) {
      count++;
      set.add(jewelArray[i]);
    }
  }
  return count;
}

// Time comp: O(n + m) --n and m being the sizes of the stones and jewels strings
// Space comp: O(m) --m being the size of the jewels string