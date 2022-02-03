const palindromes = function(string) {
    // let split = palindrome.split('');
    // let reverse = split.reverse();
    // let join = reverse.join('');
    // if (join === palindrome) {
    //     return true;
    // } else {
    //     return false;
    // }
    maybePalindrome = string.toLowerCase().replace(/[^a-z]/g, '');
    return (
        maybePalindrome
        .split('')
        .reverse()
        .join('') === maybePalindrome
    );
};

// Do not edit below this line
module.exports = palindromes;
