let deps = {
    "A": [
      "D"
    ],
    "B": [
      "F",
      "G"
    ],
    "C": [
      "G"
    ],
    "D": [
      "E"
    ],
    "E": [
      "H"
    ],
    "F": [
      "A"
    ],
    "G": [
      "H"
    ],
    "H": []
}
function depsAnalysisService(modName) {
    return deps[modName] || []
}

function analysize(modNames) {
  let res = []
  let _analyze = function(modNames) {
    for (let modName of modNames) {
      let results = depsAnalysisService(modName)
      if (results.length > 0) {
        for (let result of results) {
          if (!res.includes(result)) {
            res.push(result)
          }
          _analyze(results)
        }
      }
    }
  }
  _analyze(modNames)
  return res;
}
console.log(analysize(['B', 'C']))