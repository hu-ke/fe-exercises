let count = 0

function getCount() {
    return count
}
function incCount() {
    count = count+1
}

module.exports = {
    count,
    getCount: getCount,
    incCount: incCount
}