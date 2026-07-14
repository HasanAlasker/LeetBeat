export function sequentialDigits(low: number, high: number): number[] {
  console.log(low);

  // i care about the first digit of the number, and how many digits it has
  // build numbers that start with the first digit and increments of it as needed, while < high

  let firstDigit = Number(low.toString()[0]);
  let digitsLength = low.toString().length;
  let lastDigit = firstDigit;

  console.log(digitsLength);
  console.log(firstDigit);

  let numberStack: string[] = [];

  while (Number(numberStack.toString().at(-1))! < high) {
    for (let i = 0; i < digitsLength; i++) {
      
    }
  }

  console.log(numberStack)

  return [];
}
