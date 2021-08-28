/*
Mark and Jane are very happy after having their first child.
Their son loves toys, so Mark wants to buy some. There are a
number of different toys lying in front of him, tagged with
their prices. Mark has only a certain amount to spend, and he
wants to maximize the number of toys he buys with this money.
Given a list of toy prices and an amount to spend, determine
the maximum number of gifts he can buy.

Note Each toy can be purchased only once.
*/


function markAndToys(prices, k) {
  prices.sort((a,b) => a - b);

  let money = k;
  let cant = 0;
  for (let price of prices) {
    if (money - price >= 0) {
      money -= price;
      cant++;
    }
  }
  return cant;
}


// Time comp: O(n log n) -- n being the size of the prices array
// Space comp: O(1)