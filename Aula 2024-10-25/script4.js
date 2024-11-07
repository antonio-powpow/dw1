function countOccurrences(str, letter){
    let count = 0
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++){
        if (str[i] == letter){
            count++
        }
    }
    return count
}
console.log(countOccurrences("Abacate","a"))