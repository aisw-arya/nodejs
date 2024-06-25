function fizzbizz(number){
    for(index=0;index<=number;index++){
        if (index % 15 === 0) {
            console.log("fizzbizz");
        } else if (index % 5 === 0) {
            console.log("bizz");
        } else if (index % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(index);
        }
    }

}

let number=30
fizzbizz(number)