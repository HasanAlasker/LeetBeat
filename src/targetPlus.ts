const numbers = [2, 5, 6, 1, 7, 9, 3, 8, 4, 0, 2, 1];
const target = 15;

export const findTarget = () => {
  let totalMatches = 0;
  let round = 0;
  console.log(`-------------------------\nTarget: ${target}\n`);

  for (let i = 0; i < numbers.length; i++) {
    ++round;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i]! + numbers[j]! === target) {
        ++totalMatches;
        console.log(
          `Number: ${numbers[i]} at position: ${i}\nNumber: ${numbers[j]} at position: ${j}\nRound: ${round}\n`,
        );
      }
    }
  }
  console.log("Total matches: " + totalMatches + "\nTotal Rounds: " + round);
  console.log(`-------------------------`);
};
