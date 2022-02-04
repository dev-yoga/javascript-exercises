const fibonacci = function(selection) {
    if (selection < 0){
        return 'OOPS'
    };
    if (selection === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < selection; i++) {
        const num1 = b;
        b = a + b;
        a = num1;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
