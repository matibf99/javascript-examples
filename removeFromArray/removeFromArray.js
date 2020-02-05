const removeFromArray = function(array, ...rest) {

    if (Array.isArray(array)) {
        
        for (let i=0; i<rest.length; i++) {
            let idx = array.indexOf(rest[i]);

            if (idx > -1)
                array.splice(idx, 1);
        }

        return array;
    }

    return 'ERROR';
}

module.exports = removeFromArray
