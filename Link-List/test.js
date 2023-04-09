const { LinkList } = require('./index');

const list = new LinkList(1);

list.add(2);
list.add(3);

console.log(list.getKthToLast(1));
