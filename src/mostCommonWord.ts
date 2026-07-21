export function mostCommonWord(paragraph: string, banned: string[]): string {
  let clean = paragraph
    .toLowerCase()
    .replace(/[^a-z]/g, " ")
    .split(" ");
  let bannedSet = new Set([...banned, ""]);
  let map = new Map<string, number>()

  let total = 0
  let mostPopular = ''

  let j = clean.filter((word) => !bannedSet.has(word));
  j.map((word)=> {
    let occ = map.get(word) ?? 0
    map.set(word, ++occ)
  })
//   console.log(map)
  map.forEach((value, key)=> {
    if(value> total){
        // console.log(key, value)
        total = value
        mostPopular = key
    }
  })

  return mostPopular
}


// export function mostCommonWord(paragraph: string, banned: string[]): string {
//   let clean = paragraph.toLowerCase().split(" ");
//   let bannedItems: string[] = ["'", "!", ",", ".", "?", ";", ...banned];

//   clean.map((word) => {
//     for(let char of word){
//         if(bannedItems.includes(char)){
//             console.log(char)
//         }
//     }
//   });

//   console.log("clean:", clean);

//   return "";
// }
