export function clearDigits(s: string): string {
  const stack: string[] = [];

  for (let char of s) {
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(char)) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.toString().split(',').join('');
}
