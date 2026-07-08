export function isPalindrome(x: number): boolean {
  const num = x.toString();
  let lastIndex = num.length - 1;

  const condition =
    num.length % 2 === 0 ? num.length / 2 : (num.length - 1) / 2;

  for (let i = 0; i < condition; i++) {
    let end = Number(num[lastIndex]);
    let start = Number(num[i]);
    // console.log(start, end);
    if (start !== end!) return false;
    lastIndex--;
  }

  return true;
}
