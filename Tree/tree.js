class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root = null;
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);

    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderNodeTraverse(node) {
    if (node !== null) {
      this.inOrderNodeTraverse(node.left);
      console.log(node.data);
      this.inOrderNodeTraverse(node.right);
    }
  }
  preOrderTraverse(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrderTraverse(node.left);
      this.preOrderTraverse(node.right);
    }
  }
  postOrderTraverse(node) {
    if (node !== null) {
      this.postOrderTraverse(node.left);
      this.postOrderTraverse(node.right);
      console.log(node.data);
    }
  }
}
