export function thirdMax(nums: number[]): number {
  let removedDup = new Set(nums);

  nums = [...removedDup.values()];
  nums.sort((a, b) => b - a);

  console.log(nums)

  if (nums.length < 3) return nums[0]!;
  
  return nums[2]!;
}
