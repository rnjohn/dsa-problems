// Leetcode medium - solution using iteration and string manipulation;

/*
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the run-length encoding of countAndSay(n - 1).
Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical 
characters (repeated 2 or more times) with the concatenation of the character 
and the number marking the count of the characters (length of the run). 
For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", 
replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

Given a positive integer n, return the nth element of the count-and-say sequence.
*/

var countAndSay = function(n) {
  if (n == 1) return "1"
  let start = '1';
  
  for (let i = 0; i < n-1; i++) {
      start = RLE(start);
  }

  return start;
};

function RLE (str) {
  let res = ''
  let curr = '';
  let amount = 0;
  for (const char of str) {
    if (char == curr) {
      amount++;
    } else {
      res += amount+curr;
      curr = char;
      amount = 1;
    }
  }

  res += amount+curr;

  return res.substring(1);
}

// This solution has a time complexity of O(n*m), n being the amount of times the RLE must be done and m being the length of the RLE of every past iteration.
// This solution has a space complexity of O(n), n being the length of the resulting string of the RLE