/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*/

function validPalindrome(s) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let set = new Set();
  for (let i = 0; i < alpha.length; i++) {
    set.add(alpha[i]);
  }
  let reversedString = '';
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i].toLowerCase())) {
      reversedString = s[i].toLowerCase() + reversedString;
    }
  }
  let newString = '';
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i].toLowerCase())) {
      newString = newString + s[i].toLowerCase();
    }
  }
  return reversedString == newString;
}

// Time comp: O(n)
// Space comp: O(n)