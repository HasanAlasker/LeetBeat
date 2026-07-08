export function sumAndMultiply(n: number): number {
  const num = n.toString();
  // remvove 0
  let zerosRemoved = num.split("0");
  // if there was no zeros, join them and split again
  zerosRemoved = zerosRemoved.join("").split("");

  let sum = 0;
  zerosRemoved.forEach((number) => {
    sum += Number(number);
  });

  const concatenated = Number(zerosRemoved.join(""));
  console.log(zerosRemoved);
  console.log(sum);
  console.log(concatenated);

  return concatenated * sum;
}
