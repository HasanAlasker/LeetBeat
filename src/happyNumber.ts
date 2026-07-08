export function isHappy(n: number): boolean {
  const hasSeen = new Set<number>();

  while (n !== 1 && !hasSeen.has(n)) {
    let total = 0;
    hasSeen.add(n);
    for (const digit of n.toString()) {
      console.log(digit);
      total += Number(digit) * Number(digit);
    }
    console.log(total);
    n = total;
  }

  return n === 1;
}
