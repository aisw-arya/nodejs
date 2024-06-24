function palindrome(str){
    let lowerString = str.toLowerCase()
    reversedString =lowerString.split('').reverse().join('');
    if (lowerString==reversedString) {
        return 'palindrome';
    }else{
        return 'not a palindrome'
    }

}

let str ='Dad'
console.log(palindrome(str));