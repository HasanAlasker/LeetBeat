export function makeGood(s: string): string {
  const stack: string[] = [];

  for (let char of s) {
    if (
      stack.at(-1) &&
      stack.at(-1) !== char &&
      stack.at(-1)?.toLowerCase() === char.toLowerCase()
    ) {
      stack.pop();
    } else stack.push(char);
  }

  return stack.toString().split(",").join("");
}
