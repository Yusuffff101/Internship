function flatten(unflatObject) {
    let result = {};

    function recursiveFlatten(obj, currentKey) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let newKey = currentKey ? currentKey + '.' + key : key;

                if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                    recursiveFlatten(obj[key], newKey);
                } else {
                    result[newKey] = obj[key];
                }
            }
        }
    }

    recursiveFlatten(unflatObject, '');
    return result;
}
