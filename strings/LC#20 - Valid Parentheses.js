// Leetcode easy - solution using stack

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s) {
  let stack = [];

  for (const char of s) {
    if (char == '[' || char == '{' || char == '(') {
      stack.push(char);
    } else {
      if (!stack.length) return false;
      const pop = stack.pop();
      if (char == ']' && pop != '[') return false;
      if (char == '}' && pop != '{') return false;
      if (char == ')' && pop != '(') return false;
    }
  }

  if (stack.length) return false;

  return true;
}

// This solution has a time complexity of O(n) since we do a single pass through all the chars of the string
// This solution has a space complexity of O(n) since we store a stack that can have the entire string in the worst case