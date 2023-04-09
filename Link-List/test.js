const { LinkList } = require('./index');

const list = new LinkList(1);
list.add(2);
list.add(3);
list.add(4);

console.log('Before delete middle');
list.print();

list.deleteMiddleNode();

console.log('After delete middle');
list.print();
