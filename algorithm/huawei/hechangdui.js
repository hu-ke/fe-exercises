

let arr = '16 103 132 23 211 75 155 82 32 48 79 183 13 91 51 172 109 102 189 121 12 120 116 133 79 120 116 208 47 110 65 187 69 143 140 173 203 35 184 49 245 50 179 63 204 34 218 11 205 100 90 19 145 203 203 215 72 108 58 198 95 116 125 235 156 133 220 236 125 29 235 170 130 165 155 54 127 128 204 62 59 226 233 245 46 3 14 108 37 94 52 97 159 190 143 67 24 204 39 222 245 233 11 80 166 39 224 12 38 13 85 21 47 25 180 219 140 201 11 42 110 209 77 136'
.split(' ')
// let arr = '186 186 150 200 160 130 197 200'.split(' ')

var lengthOfLIS = function(nums) {
    let LEN = nums.length
    let dp = new Array(LEN).fill(1)
    for (let i = 1; i < LEN; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return dp
}

var lengthOfLDS = function(nums) {
    let LEN = nums.length
    let dp = new Array(LEN).fill(1)
    for (let i = LEN - 2; i >= 0; i--) {
        for (let j = LEN - 1; j > i; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return dp
}

function hechangdui(arr) {
    let dp1 = lengthOfLIS(arr)
    let dp2 = lengthOfLDS(arr)
    let LEN = dp1.length
    let max = 0
    for (let i = 0; i < LEN; i++) {
        if (dp1[i] === 1 || dp2[i] === 1) {
            console.log(i)
            continue
        }
        max = Math.max(max, dp1[i] + dp2[i] - 1)
    }
    console.log(arr.length - max)
}
hechangdui(arr)