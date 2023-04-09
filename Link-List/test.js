const { LinkList } = require('./index');

const l1 = new LinkList(9);
const l2 = new LinkList(9);

l1.add(9);
l1.add(9);
l1.add(9);
l1.add(9);
l1.add(9);
l1.add(9);

l2.add(9);
l2.add(9);
l2.add(9);

const head = LinkList.sumList(l1.head, l2.head);

l1.print(head);
