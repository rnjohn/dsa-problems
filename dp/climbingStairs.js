// Leetcode easy - solution using dynamic programming with memoization

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbingStairs(n) {
    let memo = [];
    for (let i = 1; i <= n; i++) {
        if (i == 1) {
            memo[i] = 1;
        } else if (i == 2) {
            memo[i] = 2;
        } else {
            memo[i] = memo[i-1] + memo[i-2];
        }
    }
    return memo[memo.length-1];
}

n = 3;
console.log(climbingStairs(n));

// This solution uses dynamic programming, in the sense that the solution for the nth step is built
// upon the solution for n-1th step and n-2th step.
// This solution has a time complexity of O(n) since the solutions for the steps are calculated n times
// This solution has a space complexity of O(n) since an extra array is used for storing the solutions
// for each step.

// There is also a solution that uses recursion.

function climbingStairsRecursion(num) {
    if (num < 1) return 0;
    if (num == 1) {
        return 1
    }
    if (num == 2) {
        return 2
    }
    return climbingStairsRecursion(num-1) + climbingStairsRecursion(num-2);
}