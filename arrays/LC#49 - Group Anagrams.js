// Leetcode medium - solved using hashmaps and string/char manipulation

/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

var groupAnagrams = function(strs) {
  let map = new Map();

  for (str of strs) {
      const signature = createSignature(str);
      if (!map.has(signature)) {
          map.set(signature, [])
      }
      map.get(signature).push(str);
  }

  const result = [];
  map.forEach(value => result.push(value));

  return result;
};


function createSignature(s) {
  const arr = Array(26).fill(0);

  for (const c of s) {
      arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  const result = [];
  for (let i = 0; i < 26; i++) {
      if (arr[i] != 0) {
          result.push(String.fromCharCode(i + 'a'.charCodeAt(0), arr[i].toString()));
      }
  }

  return result.join('');
}

// This solution has a time complexity of O(n*m), being n the length of the strings array and m the length of the longest string.
// This solution has a space complexity of O(n*m), being n the length of the strings array and m the length of the longes string with the least repeated characters.