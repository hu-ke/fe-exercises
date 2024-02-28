
function transform(arr1, arr2) {
    let LEN1 = arr1.length
    let LEN2 = arr2.length
    let res = []
    for (let i = 0; i < LEN1; i++) {
        for (let j = 0; j < LEN2; j++) {
            let temp = []
            temp.push(arr1[i])
            temp.push(arr2[j])
            res.push(temp)
        }
    } 
    res = res.map(item => {
        return item.join('-')
    })
    return res
}

let arr = [
    ['笔记本', '平板电脑', 'PC机', '上网本'],
    ['戴尔', '苹果', '联想'],
   //  ['黑色', '银色', '白色'],
    ['塑料', '铝'],
]

function abc(arr) {
    let LEN = arr.length
    let res = arr[0]
    for (let i = 1; i < LEN; i++) {
        let arr1 = arr[i]
        res = transform(res, arr1)
    }
    console.log(res)
}
abc(arr)