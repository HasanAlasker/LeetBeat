const username = "sevenkplus";

export const findGender = () => {
  // when you want to remove duplicates use SET
  const uniqueChars = new Set(username);

  if (uniqueChars.size % 2 === 0) console.log(`"CHAT WITH HER!"`);
  else console.log(`IGNORE HIM!`);
};
