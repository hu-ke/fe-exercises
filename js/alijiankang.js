// 2、使用递归、非递归两种方式遍历出data 里面所有的name, 得到一个个names 数组
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
function bfs(data) {
    let arr = data
    let names = []
    while(arr.length > 0) {
        let item = arr.shift()
        names.push(item.name)
        if (item.children) {
            item.children.forEach(i => {
                arr.push(i)
            })
        }
    }
    console.log(names)
    return names
}

function DFS(data) {
  function dfs(data, fn) {
    console.log('data>>', data)
    typeof fn === 'function' && fn(data)
    if (Array.isArray(data.children)) {
      for (let item of data.children) {
        console.log('ite', item)
        dfs(item, fn)
      }
    }
  }
  let res = []
  data.forEach(node => {
    dfs(node, (item) => {
        res.push(item)
    })
  })
 
  return res.map(i => i.name)
}
console.log(DFS(data))
