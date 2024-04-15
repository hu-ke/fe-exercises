let arr = [1,2,3,4,5,6,7,8]
// 输出其中的偶数
// Fn.next().next().next()

function execute(arr) {
    let index = 0
    let context = {
        next
    }
    function next() {
        while(arr[index] % 2 !== 0) {
            index++
        } 
        console.log(arr[index])
        index++
        return context
    }
    return context
}
execute(arr).next().next().next().next()