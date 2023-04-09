const { LinkList } = require('./index');

const list = new LinkList(1);

console.log('Before partition');
list.print(list.head);

const head = list.partition(list.head, 0);

console.log('After partition');
list.print(head);
