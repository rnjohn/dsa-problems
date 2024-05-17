// Leetcode easy - solved using hashmaps

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

var isAnagram = function(s, t) {
  const len = s.length;
  if (len != t.length) return false;

  let dict1 = new Map()
  let dict2 = new Map()

  for (let i = 0; i < len; i++) {
      if (dict1.has(s[i])) {
          dict1.set(s[i], dict1.get(s[i]) + 1);
      } else {
          dict1.set(s[i], 0);
      }

      if (dict2.has(t[i])) {
          dict2.set(t[i], dict2.get(t[i]) + 1);
      } else {
          dict2.set(t[i], 0);
      }
  }

  let keys = dict1.keys();

  for (const key of keys) {
      if (dict1.get(key) != dict2.get(key)) return false;
  }

  return true;
};

s = 'anagram'
t = 'nagaram'
console.log(isAnagram(s, t));