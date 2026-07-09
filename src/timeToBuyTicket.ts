export function timeRequiredToBuy(tickets: number[], k: number): number {
  let time = 0;

  while (tickets[k]! > 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i]! > 0) {
        tickets[i]!--;
        time++;
      }
      if (tickets[k] === 0) {
        return time;
      }
    }
  }

  return time;
}
