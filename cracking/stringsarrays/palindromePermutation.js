/*
Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards.
A permutation is a rearrangement of letters.The palindrome does not need to
be limited to just dictionary words.
*/

function palindromePermutation(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  let odd = false;
  for (const key of map.keys()) {
    if (map.get(key) % 2 != 0 && odd) return false;
    if (map.get(key) % 2 != 0 && !odd) odd = true;
  }
  return true;
}

// Time comp: O(n) - n being the length of the string;
// Space comp: O(m) - m being the amount of different letters of the string

/*
I can know if a word is palindrome if 
each letter appears an even number of times
and only one letter can appear an odd number
of times
*/

/*
- iterate over each letter, storing them in a hashmap
  where the key will be the letter and the value will
  be the number of times it appears in the string
- check if every occurence of the letters are even
  (only one can be odd)
*/