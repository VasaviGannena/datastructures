class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
  addDescendant(descendant) {
    if (descendant instanceof TreeNode) {
      this.descendants.push(descendant);
    } else {
      this.descendants.push(new TreeNode(descendant));
    }
  }
  removeDescendant(descendantToRemove) {
    const length = this.descendants.length;
    this.descendants = this.descendants.filter((descendant) => {
      if (descendantToRemove instanceof TreeNode) {
        return descendantToRemove !== descendant;
      } else {
        return descendant.value !== descendantToRemove;
      }
    });
    if (length === this.descendants.length) {
      this.descendants.forEach((descendant) =>
        descendant.removeDescendant(descendantToRemove)
      );
    }
  }
  print(level = 0) {
    let result = "";
    for (let i = 0; i < level; i++) {
      result = result + "-- ";
    }
    console.log(`${result}${this.value}`);
    this.descendants.forEach((descendant) => descendant.print(level + 1));
  }

  depthFirstTraversal() {
    console.log(this.value);
    this.descendants.forEach((descendant) => descendant.depthFirstTraversal());
  }

  breadthFirstTraversal() {
    let queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.value);
      queue = queue.concat(current.descendants);
    }
  }
}

module.exports = TreeNode;
