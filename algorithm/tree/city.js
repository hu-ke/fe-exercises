const root = {
    id: 'axzx',
    name: '广东省',
    children: [
        {
            id: 'sdsd',
            name: '深圳市',
            children: [
                {
                    id: '45dss',
                    name: '南山区'
                },
                {
                    id: 'sdsd11',
                    name: '福田区',
                    children: [{
                        id: 'ddrr2',
                        name: 'A街道'
                    }]
                }
            ]
        },
        {
            id: '2323d',
            name: '东莞市',
            children: [
                {
                    id: 'xxs2',
                    name: 'A区'
                },
                {
                    id: 'kklio2',
                    name: 'B区',
                }
            ]
        }
    ]
};

function find(root, id) {
    let res = []
    function dfs(root, path=[]) {
        path.push(root)
        if (root.id === id) {
            // console.log('path>', path)
            res = path
            return root
        }
        if (root.children?.length > 0) {
            for (let i = 0; i < root.children.length; i++) {
                let child = root.children[i]
                let target = dfs(child, path)
                if (target) {
                    return target
                }
            }
        }
        path.pop()
    }
    dfs(root, [])
    console.log('res>', res)
}
find(root, 'sdsd11')
