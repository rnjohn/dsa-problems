/*
Assume you have amethod isSubstring which checks if one word is asubstring of another.
Given two strings, S1 and S2, write code to check if S2 is a rotation of S1 using only
one call to isSubstring (e.g.,"waterbottle"is a rotation of"erbottlewat").
*/

function stringRotation(s1, s2) {
  if (s1.length != s2.length) return false;
  const newStr = s1+s1;
  if (newStr.includes(s2)) return true;
  return false;
}

//Time comp: O(1) - assuming javascript implementation appends in constant time
//Space comp: O(n) - n being the size of the first string

/*
- we can stick the first string together so it would include any rotation of the word
*/