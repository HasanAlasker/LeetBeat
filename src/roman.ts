export function romanToInt(s: string): number {
  const romanMap = new Map([
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ]);
  if (romanMap.has(s)) {
    return romanMap.get(s)!;
  }
  let number = [];
  // if i + 1 doesn't exist (and not the last digit) or i + 1 > i, combine i + 1 and i
  // 3045
  // M M M XL V
  // 1000, 1000, 1000, 49, 5

  for (let i = 0; i < s.length; i++) {
    if (
      (!s[s.length - 1] && !romanMap.has(s[i + 1]!)) ||
      romanMap.get(s[i + 1]!)! > romanMap.get(s[i]!)!
    ) {
      number.push(romanMap.get((s[i]! + s[i + 1]).toString()));
      i++;
    } else number.push(romanMap.get(s[i]!));
  }
  console.log(number);

  let awnser = 0;
  number.forEach((n) => {
    awnser += n!;
  });
  return awnser;
}
