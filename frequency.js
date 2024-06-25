function frequency(string) {
    let dictionary = {};

    for (let index = 0; index < string.length; index++) {
        let char = string[index];

        if (dictionary.hasOwnProperty(char)) {
            dictionary[char]++;
        } else {
            dictionary[char] = 1;
        }
    }

    console.log(dictionary);
}

let string = 'The quick brown fox jumps over the lazy dog';
frequency(string);
