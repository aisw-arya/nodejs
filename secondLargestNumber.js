function largest(array){
    let duplictesRemoved =[...new Set(array)];
    let sortedArray= duplictesRemoved.sort((a, b) => b - a)
    let secondLargest = sortedArray[1]
    return secondLargest

}

let array =[1,3,5,6,8,5,2,7,5,10,8,9,10]
console.log(largest(array));