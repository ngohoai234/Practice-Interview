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

  deleteMiddleNode() {
    // step 1 : initialize tortoise and rabbit = head
    // step 2 : while rabbit.next is not null
    //  step 2.1 : prevNode = tortoise and  tortoise = tortoise.next
    //  step 2.2 : rabbit = rabbit.next.next
    let tortoise = this.head,
      rabbit = this.head,
      prevNode = null;
    if (!tortoise) {
      return;
    }
    while (rabbit?.next) {
      prevNode = tortoise;
      tortoise = tortoise.next;
      rabbit = rabbit.next.next;
    }
    if (prevNode) {
      prevNode.next = tortoise?.next ?? null;
    } else {
      this.head = null;
    }
  }

  partition(head, value) {
    let p1 = new Node(0),
      p1_start = p1,
      p2 = new Node(0),
      p2_start = p2,
      current_node = head;
    if (!current_node) {
      return;
    }
    while (current_node) {
      const newNode = new Node(current_node.value);
      if (current_node.value < value) {
        p1.next = newNode;
        p1 = p1.next;
      } else {
        p2.next = newNode;
        p2 = p2.next;
      }
      current_node = current_node.next;
    }
    if (p1_start.next) {
      p1.next = p2_start.next;
    } else {
      p1_start.next = p2_start.next;
    }
    return p1_start.next;
  }

  print(head) {
    let currentNode = head;
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
