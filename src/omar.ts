export function isPalindrome(x: number): boolean {
  const reverseOfNumber = x.toString().split("").reverse().join("");

  return x === Number(reverseOfNumber);
}
