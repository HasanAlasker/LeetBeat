export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function buildList(arr: number[]): ListNode | null {
    const dummy = new ListNode(0);
    let curr = dummy;
    for (const v of arr) {
        curr.next = new ListNode(v);
        curr = curr.next;
    }
    return dummy.next;
}

export function reverseList(head: ListNode | null): ListNode | null {
    let curr = head;
    let prev = null;

    while(curr){
        let nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    }
  return prev;
}
