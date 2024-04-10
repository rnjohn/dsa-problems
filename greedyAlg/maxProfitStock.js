// Leetcode easy - solution using Greedy method, can also be solved using two pointers

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a 
// different day in the future to sell that stock.

//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices) {
    let minimumStock = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length;i++) {
        if (prices[i] < minimumStock) minimumStock = prices[i];
        if (prices[i] - minimumStock > maxProfit) maxProfit = prices[i] - minimumStock;
    }
    return maxProfit;
}

prices = [7,1,5,3,6,4]
console.log(maxProfit(prices)) // 5

// This solution uses a greedy approach to optimize the solution, we save the lowest stock evaluated
// and from there try to find a higher stock that gives the maximum profit.
// This solution has a time complexity of O(n) since the array is passed through only once.
// This solution has a space complexity of O(1) since no additional data structures are used.

// This can also be solved using two pointers

function maxProfitPointers(prices) {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
}