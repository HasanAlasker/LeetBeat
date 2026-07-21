import { addStrings } from "./src/addStrings.js";
import { calPoints } from "./src/baseballGame.js";
import { clearDigits } from "./src/clearDigits.js";
import { sumAndMultiply } from "./src/concatenateNonZeroAndMultiplySum.js";
import { containsDuplicate } from "./src/containsDuplicates.js";
import { deleteDuplicates } from "./src/deleteDupList.js";
import { isHappy } from "./src/happyNumber.js";
import { licenseKeyFormatting } from "./src/licenseKeyFormatting.js";
import { majorityElement } from "./src/majorityElement.js";
import { makeGood } from "./src/makeStringGreat.js";
import { maxProfit } from "./src/maxProfit.js";
import { mergeTwoLists } from "./src/mergeLists.js";
import { middleNode } from "./src/middleNode.js";
import { mostCommonWord } from "./src/mostCommonWord.js";
import { isPalindrome } from "./src/omar.js";
import { isValid } from "./src/parantheses.js";
import { myPow } from "./src/pow.js";
import { arrayRankTransform } from "./src/rankTransform.js";
import { removeDuplicates } from "./src/removeDuplicates.js";
import { removeElements } from "./src/removeFromList.js";
import { reverseString } from "./src/reverse.js";
import { buildList, reverseList } from "./src/reveseList.js";
import { romanToInt } from "./src/roman.js";
import { sequentialDigits } from "./src/seqDigits.js";
import { mySqrt } from "./src/sqrt.js";
import { findTarget } from "./src/targetPlus.js";
import { thirdMax } from "./src/thirdMax.js";
import { timeRequiredToBuy } from "./src/timeToBuyTicket.js";
import { findGender } from "./src/username.js";
import { isAnagram } from "./src/validAnagram.js";

// Arrays, strings, stacks, queues

// findTarget();
// findGender();
// console.log(isAnagram("cac", "acc"));
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
// console.log(isPalindrome(12321));
// console.log(sumAndMultiply(11))
// console.log(mySqrt(8));
// console.log(myPow(2.00000, -2))
// console.log(majorityElement([3, 2, 3]));
// console.log(romanToInt('MMMXLV'));
// console.log(isValid('{'));
// console.log(calPoints(["1","C"]));
// console.log(clearDigits("d9"));
// console.log(timeRequiredToBuy([2,3,2], 2));
// console.log(makeGood("LeeEetcode"));
// console.log(maxProfit([1,2]));
// console.log(reverseString(["h","e","l","l","o"]));
// console.log(arrayRankTransform([40,10,20,30]));
// console.log(sequentialDigits(100, 200))
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
// console.log(thirdMax([3, 2, 1]))
// console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ]),
);

// linked lists

const head1 = buildList([1, 2, 6, 3, 4, 5, 6, 3]);
// const head2 = buildList([1, 3, 4]);
// console.log(reverseList(head));
// console.log(mergeTwoLists(head1, head2));
// console.log(deleteDuplicates(head1));
// console.log(middleNode(head1));
// console.log(removeElements(head1, 6));
