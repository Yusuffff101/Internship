function calculateFrequency(string) {
    let frequency = new Array(26).fill(0);

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char >= 'a' && char <= 'z') {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            frequency[index]++;
        }
    }

    return frequency;
}
