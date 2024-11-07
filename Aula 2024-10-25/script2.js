function countVowels(txt){
    count = 0
    txt = txt.toLowerCase()

    for (i = 0; i < (txt.length); i++){

    if (txt[i].includes("a") || txt[i].includes("e") || txt[i].includes("i") || txt[i].includes("o") || txt[i].includes("u")){
        count++
    }
    }

    return count
}
console.log("Número de vogais: "+countVowels("Olaaa"))