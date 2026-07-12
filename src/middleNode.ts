import { ListNode } from "./reveseList.js";

export function middleNode(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(-1);
  let tail = dummy;
  let headCopy = head;
  let length = 0;

  while (headCopy) {
    tail.next = head;
    headCopy = headCopy.next;
    length++;
  }

  let middle = Math.floor(length/2)
  while(middle>0){
    tail.next = head
    head = head?.next!
    middle--
  }

  return head;
}
