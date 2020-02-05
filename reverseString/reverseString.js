const reverseString = function(text) {
    let reverse = '';

    if (typeof text == 'string') { 
        for (let i=text.length-1; i>=0; i--) {
            let a = text.charAt(i);
            reverse += a;
        }

        return reverse;
    }

    return 'ERROR';
}

module.exports = reverseString