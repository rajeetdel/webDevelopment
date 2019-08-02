function map(f,a) {
    var result =[];
    var i;

    for(i=0; i< a.length; i++) {
        result[i] = f(a[i]);
    }

    return result;
}

var f = function(x) {
    return x*x*x;
}

var numbers = [1,2,3,4,5];
var cube = map(f,numbers);

console.log(cube);