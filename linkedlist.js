// function LinkedList() {
  
//     head = null;
//     length = 0; 
  
//     let Node = function(element) {
//       this.element = element;
//       this.next = null;
//     }
//     // defining a part of the list , a node as element (the data concerned and next being the link to the NEXT link in the chain
//     this.head = function() {
//       return head;
//     }
//     // the top most node (index 0)
//     this.length = function() {
//       return length;
//     }
    
//     //length of the entire list

//     this.add = function(element) {
//       let newNode = new Node(element);  
//       if(head === null) {
//         head = newNode;
//         //if there is no list (no topmost data) then add new node as head
//       } else {
//         let currentNode = head;
//         while(currentNode.next !== null) {
//           currentNode = currentNode.next;
//         }
//         currentNode.next = newNode;
//         //scans through entire list finding the last position to add a new node there
//       }
//       length++;
//       //increases total length of list when a new node is added to keep track
//     }
    
//     this.remove = function(element){
//     if(head === null) {
//       return 
//       console.log("empty linked list, nothing to remove");
//     } else {
//         let currentNode = head;
//         if(currentNode.element === element){
//           head = currentNode.next;
//           length--;
//           return head;
//         } else {
//             while(currentNode.next !== null) {
//               if(currentNode.next.element === element){
//                 currentNode.next = currentNode.next.next;
//                 //once you find the desired node set PREVIOUS node to link to LATTER node
//                 length--;
//                 //reduce length duh
//                 return head;
//               }
//               currentNode = currentNode.next;
//             }
//          }
//       }
//     }
  
//     this.find = function(element) {
//       currentNode = head;
//       position = 1;
//       if(head === null){
//         return "empty linked linked list";
//         // obviously no list no find
//       }
//       else {
//         if (currentNode.element === element) {
//           return console.log(position);
//           //once sorted through lsit return found value
//         } else {
//             while(currentNode.element !== element){
//               currentNode = currentNode.next;
//               position++;
//               //if 
//             }
//             if (currentNode.element === element){
//               return position;
//             } else {
//               console.log("this hits");
//               return -1;
//           }
//         }
//       }
//     }
//   }

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
