const repeatString = function(string, x) {

    let text = '';
    for (let i=1; i<=x; i++) {
        text += string;
    }

    if (x >= 0) return text;
    else return 'ERROR';
}

module.exports = repeatString
