function unflatten(flatObject) {
    let result = {};

    for (let key in flatObject) {
        if (flatObject.hasOwnProperty(key)) {
            let keys = key.split('.');
            let current = result;

            for (let i = 0; i < keys.length; i++) {
                let subKey = keys[i];

                if (i === keys.length - 1) {
                    current[subKey] = flatObject[key];
                } else {
                    if (!current[subKey]) {
                        current[subKey] = {};
                    }
                    current = current[subKey];
                }
            }
        }
    }

    return result;
}
