import { printList } from "./deleteDupList.js";
import { ListNode } from "./reveseList.js";

export function removeElements(
  head: ListNode | null,
  val: number,
): ListNode | null {
  let dummy = new ListNode(-1);
  let tail = dummy;

  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      tail.next = head;
      tail = tail.next;
      head = head.next;
    }
  }
  tail.next = null;

//   printList(dummy.next);

  return dummy.next;
}
