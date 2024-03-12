/* 
for this question we would be using sliding window 
starting from the first price on the list
left pointer is for buying and right pointer is for selling
using the example
l=0,r=1
while r < lenght of the prices
to check profitability
if r pointer < l pointer so lpointer would = rpointer
to check for profit = r pointer - l pointer
right would increase
for maxprofit = max (maxprofit, profit) remember maxprofit was 0 initialy
Input: prices = [7,1,5,3,6,4]
l=7 r=1 check the first condition which passes
l=1 r = 5 run a check again which doesnt pass
profit = 5-1 =4
maxprofit = 4
then repeat till the end of the prices to get the final max profit


*/
function bestBuy(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (r < prices.length) {
    if (prices[right] < prices[left]) {
      prices[left] = prices[right];
    }
    let profit = prices[right] - prices[left];
    maxProfit = Math.max(maxProfit, profit);
    right++;
  }
  return maxProfit;
}
