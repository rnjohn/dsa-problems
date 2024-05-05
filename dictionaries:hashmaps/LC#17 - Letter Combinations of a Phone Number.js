/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations
that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
2 = abc
3 = def
4 = ghi
5 = jkl
6 = mno
7 = pqrs
8 = tuv
9 = wxyz

Example:
  input: "23"
  output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

function letterCombinations(digits) {
  if (digits === "") return [];
  let map = new Map();
  map.set('2', ['a', 'b', 'c']);
  map.set('3', ['d', 'e', 'f']);
  map.set('4', ['g', 'h', 'i']);
  map.set('5', ['j', 'k', 'l']);
  map.set('6', ['m', 'n', 'o']);
  map.set('7', ['p', 'q', 'r', 's']);
  map.set('8', ['t', 'u', 'v']);
  map.set('9', ['w', 'x', 'y', 'z']);
  let solutions = [];

  findCombinations(digits, 0, '', solutions, map);
  return solutions;
}

function findCombinations(digits, currentIdx, string, solutions, map) {
  const chars = map.get(digits[currentIdx]);
  if (currentIdx === digits.length - 1) {
    for (char of chars) {
      solutions.push(string + char);
    }
  } else {
    for (char of chars) {
      findCombinations(digits, currentIdx + 1, string + char, solutions, map);
    }
  }
}

// Time comp: O(2^n) -- n being the amount of digits in the input
// Space comp: O(m) -- m being the amount of digits in the input