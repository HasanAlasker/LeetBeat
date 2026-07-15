export function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let result = "";
  let carry = 0;

  //   123
  //   129
  //     2

  while (i >= 0 || j >= 0) {
    if (Number(num1[i]) + Number(num2[j]) <= 9) {
    }
    i--;
    j--;
  }

  return "";
}
