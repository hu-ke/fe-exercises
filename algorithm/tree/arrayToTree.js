// 平铺List转Tree结构（子节点的parent为父节点id）
const arr = [
    { id: 1, content: 'jscontext' },
    { id: 2, content: 'CORS', parent: 1 },
    { id: 3, content: 'Axios', parent: 1 },
    { id: 5, content: '~', parent: 6 },
    { id: 6, content: 'Event Loop' },
    { id: 7, content: 'Serverless', parent: 3 },
    { id: 9, content: 'webpack/rollup', parent: 5 },
];
function toTree(arr) {
    let roots = []
    for (let node of arr) {
        if (!node.parent) {
            roots.push(node)
        } else {
            let parent = arr.find(item => item.id === node.parent)
            if (parent) {
                if (!parent.children) {
                    parent.children = [node]
                } else {
                    parent.children.push(node)
                }
            } else {
                roots.push(node)
            }
        }
    }
    return roots
}
console.log(JSON.stringify(toTree(arr)))