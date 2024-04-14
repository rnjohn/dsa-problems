// Leetcode easy -- solution using charCodes

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

function validPalindrome(s) {
  str = [];
  for (const char of s) {
      const charCode = char.toLowerCase().charCodeAt();
      if ((charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122)) {
          str.push(char.toLowerCase());
      }
  }

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] != str[str.length-1-i]) return false;
  }
  return true;
}

// Time comp: O(n)
// Space comp: O(n)