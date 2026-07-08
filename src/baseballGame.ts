export function calPoints(operations: string[]): number {
  console.log(operations);

  const stack: number[] = [];

  // "5","2","C","D","+"
  let total = 0;

  for (let op of operations) {
    if (op === "C") {
      stack.pop();
    } else if (op === "D") {
      stack.push(stack.at(-1)! * 2);
    } else if (op === "+") {
      stack.push(stack.at(-1)! + stack.at(-2)!);
    } else stack.push(Number(op));
  }
  console.log(stack);

  stack.forEach((e) => {
    total += e;
  });

  return total;
}
