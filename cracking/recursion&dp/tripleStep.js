/*
A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
or 3 steps at a time. Implement a method to count how many possible ways the child
can run up the stairs.
*/

function tripleStep(n) {
  memo = []
  return solve(n, memo);  
}

function solve(n, memo) {
  if (n < 0) {
    return 0;
  } else if (n == 0) {
    return 1;
  } else if (memo[n]) {
    return memo[n]
  } else {
    memo[n] = solve(n-1, memo) + solve(n-2, memo) + solve(n-3, memo);
    return memo[n];
  }
}

//Time comp: O(n)
//Space comp: O(n)
