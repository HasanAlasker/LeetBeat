export function removeDuplicates(nums: number[]): any {
  const result = [...new Set(nums)];
  nums.splice(0, nums.length, ...result);

  return result.length;
}
