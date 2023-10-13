// SHIT TO add
// IndexOf
// elementAt
// AddAtt
// removeAt

class ListNode{
  constructor(data){
    this.data=data
    this.next=null
  }
}
class LinkedList{
  constructor(){
    this.head=null
  }

}

function size(){
  let count = 0;
  let node = this.head;
  while (node) {
  count++;
  node=node.next
  }
  return count;
}

function getFirst() {
  return this.head;
}


function Get(index) {
  // Index is outside the bounds of the list
  if (index < 0 || index > this.length) {
    return null;
  }
  if (index === 0 )  {
    return this.head;
  }
  let current = this.head;
  let iterator =  0;
  while (iterator < index) {
    iterator++;
    current = current.next;
  }
}
  function Search(element) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
       if (current.data === element) {
          return `Element found at index ${index}`;
       }
       current = current.next;
       index++;
    }
    return "Element not found";
 }

let myLinkedList = new LinkedList()
let node1 = new ListNode(2)
let node2= new ListNode(5)
let node3= new ListNode(21)
let node4= new ListNode(43)
let node5= new ListNode(12)

head=node1
node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5

console.log(getFirst(myLinkedList));
console.log(size(myLinkedList));
console.log(Search(5));
