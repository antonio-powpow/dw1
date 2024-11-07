function calcTabuada(x){

    let count = 1

    while(count <= 10){
        console.log(x," x ", count," = ", (x*count))
        count++
    }
}
calcTabuada(13)

console.log()

function calcTabuada2(x){

    for (let count = 1; count <= 10; count++){
        console.log(x," x ", count," = ", (x*count))
    }
}
calcTabuada2(12)