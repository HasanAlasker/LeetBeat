export function containsDuplicate(nums: number[]): boolean {
  let map = new Map<number, number>();

  for (let char of nums) {
    if (map.has(char)) return true;
    else {
      let occurences = map.get(char) || 0;
      map.set(char, occurences++);
    }
  }
  return false;
}
