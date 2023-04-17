const { LinkList } = require('./index');

const l1 = new LinkList(1);

l1.add(2);

const head = l1.reverse(l1.head);

l1.print(head);
