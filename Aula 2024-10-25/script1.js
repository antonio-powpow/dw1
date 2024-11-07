function reverseString(txt) {
    let reverseTxt = ""
    for (let i = (txt.length - 1); i >= 0; i--){
        reverseTxt += txt[i]
    }
    return reverseTxt
}
console.log(reverseString("hello world"))