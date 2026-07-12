export function arrayRankTransform(arr: number[]): number[] {
  if (!arr) return [];

  // sort arr in a copy to keep original
  let sortedArr = [...arr].sort((a, b) => a - b);
  let rankMap = new Map<number, number>();

  let currentRank = 0;

  for (let item of sortedArr) {
    // find the rank of each number in the sorted array
    if (!rankMap.has(item)) {
      rankMap.set(item, ++currentRank);
    }
  }

  // print the rank of each item in the original array
  return arr.map((item) => rankMap.get(item)!);
}

// export function arrayRankTransform(arr: number[]): number[] {
//   let sortedArr = [...arr].sort((a, b) => a - b);
//   let rankStack: { num: number; rank: number }[] = [];
//   rankStack.push({ num: sortedArr[0]!, rank: 1 });

//   let rankList: number[] = [];
//   console.log(arr)
//   console.log(sortedArr)

//   for (let item of sortedArr) {
//     if (item === rankStack.at(-1)?.num) {
//       rankList.push(rankStack.at(-1)?.rank!);
//     } else if (item > rankStack.at(-1)?.num!) {
//       let newRank = rankStack.at(-1)?.rank! + 1;
//       rankStack.push({ num: item, rank: newRank });
//       rankList.push(newRank);
//     }
//   }

//   return rankList;
// }
