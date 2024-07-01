function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if (Array.isArray(obj)) {
        let arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

    let objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }
    return objCopy;
}

const original = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4, 5]
    },
    e: new Date()
};

const copy = deepClone(original);

console.log(copy);
console.log(copy === original); // false
console.log(copy.b === original.b); // false
console.log(copy.e === original.e); // false
