let condicao1 = true
let condicao2 = false
let condicao3 = true

console.log("1")
console.log("2")

if (condicao1 == true){
    if (condicao3 == true){
        console.log("a")
        console.log("3")
    }
    else {
        console.log("b")
        console.log("3")
    }
}
else if(condicao2 == true){
    console.log("c")
    console.log("3")
}
else {
    console.log("d")
    console.log("3")
}

console.log("4")