/*
There is a string, s, of lowercase English letters 
that is repeated infinitely many times. 
Given an integer, , find and print the number of 
letter a's in the first  letters of the infinite string.
*/

function repeatedString(s, n) {
  const len = s.length;
  let accum = 0;
  let remainderAccum = 0;
  const remainder = n % len;
  for (let i = 0; i < len; i++) {
      if (s[i] == 'a') {
          if (i < remainder) remainderAccum++;
          accum++;
      }
  }
  accum = accum * (Math.floor(n/len));
  return accum + remainderAccum;
}

// Time comp: O(s) -- s being the length of the string, we go through each character of the string
// Space comp: O(1)