/*
The Fibonacci sequence is defined as follows: the first number of
the sequence is 0, the second number is 1, and the nth number is
the sum of the (n - 1)th and (n - 2)th numbers. Write a function
that takes in an integer n and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its
first two numbers as F0 = 0 and F1 = 1. For the purpose of this
question, the first Fibonacci number is F0; therefore, getNthFib(1)
is equal to F0, getNthFib(2) is equal to F1, etc..
*/

function getNthFib(n) {
  if (n < 2) return n;
  let prev1 = 1;
  let prev2 = 0;
  let sum;
  for (let i = 1; i < n; i++) {
    sum = prev1 + prev2;
    prev2 = prev1;
    prev1 = sum;
  }
  return sum;
}

// Time comp: O(n)
// Space comp: O(1)