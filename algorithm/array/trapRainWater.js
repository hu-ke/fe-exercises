
// let height = [0,1,0,2,1,0,1,3,2,1,2,1]
let height = [2,1,0,4,0,1,0,3]

function trap(height) {
    let LEN = height.length
    let left = 0
    let right = LEN - 1
    let res = 0
    let lmax = height[left]
    let rmax = height[right]
    while(left < right) {
        if (lmax <= rmax) {
            left++
            if (height[left] < lmax) {
                res += lmax - height[left]
            } else {
                lmax = height[left]
            }
        } else {
            right--
            if (height[right] < rmax) {
                res += rmax - height[right]
            } else {
                rmax = height[right]
            }
        }
    }
    console.log(res)
}
trap(height)