export function maxProfit(prices: number[]): number {
  console.log(prices);
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i]!;
    let currentProfit = currentPrice - minPrice;

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else if (currentPrice > minPrice && maxProfit < currentProfit) {
      maxProfit = currentProfit;
    }
  }

  console.log(minPrice);
  return maxProfit;
}
