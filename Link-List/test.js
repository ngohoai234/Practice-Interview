const { LinkList } = require('./index');

const l1 = new LinkList(1);

l1.add(2);
l1.add(1);
console.log(l1.isPalindrome(l1.head));
