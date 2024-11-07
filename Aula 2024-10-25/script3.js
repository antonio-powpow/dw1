function reverseString(txt) {
    let reverseTxt = ""
    for (let i = (txt.length - 1); i >= 0; i--){
        reverseTxt += txt[i]
    }
    return reverseTxt
}
function isPalindrome(txt) {
    let reverseTxt = reverseString(txt)
    return reverseTxt == txt
}
console.log(isPalindrome("arara"))