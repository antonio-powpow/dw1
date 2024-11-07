function capitalizeWords(str){
    str = str.split(" ")
    let finalStr = ""
    for (let i = 0; i < str.length; i++){
        finalStr += str[i].replace(str[i][0], str[i][0].toUpperCase())+" "
    }
    return finalStr
}
console.log(capitalizeWords("antonio teix"))