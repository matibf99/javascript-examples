const sumAll = function(a, b) {
    let sum = 0
    let larger = 0;
    let smaller = 0;

    if (typeof a != 'number' || typeof b != 'number' || a < 0 || b < 0) return 'ERROR'

    if (a < b) {
        smaller = a;
        larger = b;
    } else {
        larger = a;
        smaller = b;
    }

    for (let i=smaller; i<=larger; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
