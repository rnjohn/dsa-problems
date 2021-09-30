/*
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
*/

function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i-1; j >= 0; j--) {
      if (str[j] == str[i]) {
        return false;
      }
    }
  }
  return true;
}

// If not using any other data structure
// Time comp: O(n^2)
// Space comp: O(1)

// If using other data structures
// Time comp: O(n)
// Space comp: O(n)

// can also be done using the ascii values of the chars
// and using an 128-space array for validating if a
// char has appeared more than once, with a time comp
// of O(n) and a space comp of O(1)