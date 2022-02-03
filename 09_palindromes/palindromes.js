const palindromes = function(palindrome) {
    let split = palindrome.split('');
    let reverse = split.reverse();
    let join = reverse.join('');
    if (join === palindrome) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
