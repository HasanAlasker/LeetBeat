export function majorityElement(nums: number[]): number {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      let value = map.get(nums[i]);
      map.set(nums[i], ++value);
    }
  }

  let maxValue = 0;
  let maxKey = null;

  map.forEach((value, key) => {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  });

  return maxKey!;
}
