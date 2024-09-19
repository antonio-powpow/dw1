let velMaxInput = document.getElementById("vmax")
let vVeicInput = document.getElementById("vveic")
let divWarn = document.getElementById("warn")
let btt = document.getElementById("button")

function calcFine(){
    for (let classe of divWarn.classList) {
        console.log("Removing class: ", classe)
        divWarn.classList.remove(classe)
    }

    let velMax = velMaxInput.value
    let vVeic = vVeicInput.value

    let excess =  vVeic/velMax

    console.log(String(Math.ceil((excess-1)*100))+"%")

    if (excess > 1){
        divWarn.classList.add("warnB")
        divWarn.innerText = String("Você está aproximadamente "+String(Math.ceil(((excess-1)*100)))+"% acima do limite permitido! Multa de: R$ 130,16")
        if (excess > 1.2){
            divWarn.classList.add("warnB")
            divWarn.innerText = String("Você está aproximadamente "+String(Math.ceil(((excess-1)*100)))+"% acima do limite permitido! Multa de: R$ 195,23")
        }
        if (excess > 1.5){
            divWarn.classList.add("warnB")
            divWarn.innerText = String("Você está aproximadamente "+String(Math.ceil(((excess-1)*100)))+"% acima do limite permitido! Multa de: R$ 880,41")
        }
    }
    else if (excess <= 1){
        divWarn.classList.add("warnG")
        divWarn.innerText = "Você não tem multas!"
    }

}

btt.onclick = calcFine