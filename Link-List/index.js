class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  head = null;

  constructor(value) {
    this.head = new Node(value);
  }

  add(val) {
    const newNode = new Node(val);

    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    } else {
      this.head = newNode;
    }

    return newNode;
  }

  delete(val) {
    let currentNode = this.head;
    if (!currentNode) {
      return false;
    }
    debugger;
    if (val === currentNode.val) {
      this.head = null;
      return true;
    } else {
      while (currentNode.next) {
        if (currentNode.next.value === val) {
          currentNode.next = currentNode.next.next;
          return true;
        }
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  deleteDuplicate() {
    let currentNode = this.head;
    const seen = new Set();
    let prevNode = null;
    while (currentNode) {
      if (seen.has(currentNode.value)) {
        prevNode.next = currentNode.next;
      } else {
        seen.add(currentNode.value);
        prevNode = currentNode;
      }
      currentNode = currentNode.next;
    }
    // write no buffer temporary
    // while (currentNode) {
    //   let runner = currentNode;
    //   while (runner.next) {
    //     if (runner.next.value === currentNode.value) {
    //       runner.next = runner.next.next;
    //     } else {
    //       runner = runner.next;
    //     }
    //   }
    //   currentNode = currentNode.next;
    // }
  }

  getKthToLast(k) {
    let p1 = this.head,
      p2 = this.head;
    for (let i = 0; i < k; i++) {
      if (!p1) {
        return null;
      }
      p1 = p1.next;
    }
    while (p1) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p2;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

module.exports = {
  Node,
  LinkList,
};
