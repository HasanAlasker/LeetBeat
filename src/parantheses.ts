export function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (["{", "(", "["].includes(char)) {
      stack.push(char);
      console.log(stack);
    } else {
        if(stack.pop() !== pairs[char]) return false
    }
  }
  return stack.length === 0;
}
