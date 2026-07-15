export function licenseKeyFormatting(s: string, k: number): string {
  let noDash = s.split("-").join("").toUpperCase().split("");

  const firstGroupSize = noDash.length % k;
  let groups: string[] = [];

  if (firstGroupSize > 0) {
    groups.push(noDash.slice(0, firstGroupSize).join(""));
  }

  for (let i = firstGroupSize; i < noDash.length; i += k) {
    groups.push(noDash.slice(i, i + k).join(""));
  }

  return groups.join("-");
}
