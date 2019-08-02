function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

console.log(outside(3)(5));