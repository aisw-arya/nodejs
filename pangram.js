function Pangram(sentence) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < alphabet.length; i++) {
        let charcter = alphabet[i];
        if (!sentence.includes(charcter)) {
            return false; 
        }
    }
    
    return true; 
}

let word = 'the quick brown fox jumps over the lazy dog';

if (Pangram(word)) {
    console.log('This is a pangram');
} else {
    console.log('This is not a pangram');
}
