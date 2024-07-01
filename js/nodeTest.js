let root = {
    "id": 3,
    "name": "1",
    "children": [
      {
        "id": 4,
        "parentid": 3,
        "name": "4",
        "children": [
          {
            "id": 6,
            "parentid": 4,
            "name": "6"
          },
          {
            "id": 7,
            "parentid": 4,
            "name": "7"
          }
        ]
      },
      {
        "id": 5,
        "parentid": 3,
        "name": "5"
      }
    ]
  }


function updateTree(root, newNode) {
    function findNodeById(node, id) {
        if (node.id === id) return node;
        if (!node.children) return null;
        for (let child of node.children) {
            let result = findNodeById(child, id);
            if (result) return result;
        }
        return null;
    }

    function removeNodeById(node, id) {
        if (!node.children) return false;
        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i].id === id) {
                node.children.splice(i, 1);
                return true;
            }
            if (removeNodeById(node.children[i], id)) {
                return true;
            }
        }
        return false;
    }
  
    let oldNode = findNodeById(root, newNode.id);
    if (oldNode) { // 存在node
        // 父节点不一样
        if (oldNode.parentid !== newNode.parentid) {
            let oldParent = findNodeById(root, newNode.parentid)
            // 原父节点存在
            if (oldParent) {
                removeNodeById(root, oldNode.id)
                if (!Array.isArray(oldParent.children)) {
                  oldParent.children = []
                }
                oldParent.children.push(newNode)
            // 原父节点不存在，什么也不做
            }
        } else { // 父节点不变
            oldNode.name = newNode.name
            oldNode.children = newNode.children
        }
    } else { // 是一个全新的节点
      let parent = findNodeById(root, newNode.parentid)
      if (!parent) { // 没有原父亲节点存在
        if (!Array.isArray(root.children)) {
          root.children = []
        }
        root.children.push(newNode)
      } else { // 原父亲节点存在
        if (!Array.isArray(parent.children)) {
          parent.children = []
        }
        parent.children.push(newNode)
      }
    }
}

// updateTree(root, {id:4, parentid:5, name:"4"})
// console.log('root', JSON.stringify(root))

updateTree(root, {id:66, parentid:5, name:"4"})
console.log('root', JSON.stringify(root))

