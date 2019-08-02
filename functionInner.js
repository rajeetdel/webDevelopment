function addsquares(a,b) {
    function squares(x) {
        return x*x;
    }
    return squares(a) + squares(b);
}

console.log(addsquares(3,5));