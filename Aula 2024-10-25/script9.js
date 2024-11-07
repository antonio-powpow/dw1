function replaceChar(str, oldChar, newChar) {
    return str.split(oldChar).join(newChar)
}

console.log(replaceChar("hello world", "l", "z"))
console.log(replaceChar("banana", "a", "o"))
