
function secondLargest(array) {
    if (array.length < 2) {
        return null; 
    }

    let first = -Infinity; 
    let second = -Infinity; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] > first) {
            first = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > second && array[i] < first) {
            second = array[i];
        }
    }

    return second === -Infinity ? null : second;
}

