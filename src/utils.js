// Your code here
export function isPalindrome(word){
    let reverse = word.split("").reverse().join("");

    if (word === reverse){
        return true
    } else return false
}