function rand(number){
    var randomDecimalNumber = Math.random() *number;
    console.log(randomDecimalNumber);

    var wholeIntergerNumber = Math.round(randomDecimalNumber);
    console.log(wholeIntergerNumber);

    return wholeIntergerNumber;

}

console.log(rand(6));