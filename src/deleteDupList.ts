import { ListNode } from "./reveseList.js";

export function printList(head: ListNode | null) {
  let list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }
  console.log(list)
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(-200);
  let tail = dummy;

  console.log(tail)

  while (head) {
    if (tail.val !== head.val) {
      tail.next = head;
      tail = head;
      head = head.next;
    } else {
      head = head.next;
    }
  }
  tail.next = null

  printList(dummy.next)
  return dummy.next;
}
