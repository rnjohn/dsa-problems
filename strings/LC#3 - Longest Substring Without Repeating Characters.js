// Leetcode medium - solution using a set, two pointers to manage a sliding window

/*
Given a string s, find the length of the longest substring without repeating characters.
*/

function lengthOfLongestSubstring(s) {
  let left = 0;
  let right = 0;
  let set = new Set();
  let max = 0;

  while (right < s.length) {
      while (set.has(s[right])) {
          set.delete(s[left]);
          left++;
      }
      set.add(s[right]);
      right++;
      if (right - left > max) max = right - left
  }

  return max;
}

s = "zxyzxyz"
console.log(lengthOfLongestSubstring(s)) // 3

// This solution has a time complexity of O(n), since we only do a single pass through every char of the string
// This solution has a space complexity of O(n), since we use two pointers and a set that can change depending
// on the input, and in the worst case can be the size of the input string