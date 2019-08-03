function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier*x);
}

var mul = multiply(2,1,2,3);

console.log(mul);