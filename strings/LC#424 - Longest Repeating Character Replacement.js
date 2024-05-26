// Leetcode medium - solution using sliding window and hashmap

/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.
You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
*/

function characterReplacement(s, k) {
  let left = 0;
  let right = 0;

  let len = s.length;
  let map = new Map();

  let mostRepeated = 0;
  let longest = 0;

  while (right < len) {
    while (right - left - mostRepeated > k) {
      let quantity = map.get(s[left]);
      if (quantity == 1) {
        map.delete(s[left]);
      } else {
        map.set(s[left], map.get(s[left]) - 1);
      }
      left++;
    }

    if (!map.has(s[right])) {
      map.set(s[right], 1);
    } else {
      map.set(s[right], map.get(s[right]) + 1);
    }

    mostRepeated = Math.max(mostRepeated, map.get(s[right]));
    right++;
      
    if (right - left - mostRepeated <= k) longest = Math.max(longest, right-left)
  }

  return longest;
}

// This solution has a time complexity of O(n), since it does a single pass through the string. There is a while loop inside another while loop, but the
// logic of the loops dictate that the worst case scenario, the complexity would be O(2n), which is the same as O(n)
// This solution has a space complexity of O(n) since we have a map that stores the frequencies of the chars.