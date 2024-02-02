const data = [{
    name: '中国',
    children: [{
            name: '教第三节课',
        },
        {
            name: '食谱',
            children: [{
                name: '大一',
                children: [{
                        name: '晚上吃什么',
                        children: [{
                                name: '番茄牛肉'
                            },
                            {
                                name: '小酥肉'
                            }
                        ]
                    },
                    {
                        name: '中午吃什么',
                        children: [{
                            name: '水煮鱼'
                        }]
                    },
                ]
            }]
        },
        {
            name: '遛弯儿啦',
            children: null
        }
    ]
},
{
    name: '干活'
}
];
function DFS(data) {
    function dfs(data, fn) {
      typeof fn === 'function' && fn(data)
      data?.children?.forEach(child => {
        dfs(child)
      })
    }
    let res = []
    dfs(data, (item) => {
        console.log('item>>', item)
        res.push(item)
    })
    return res.map(i => i.name)
}
DFS(data)