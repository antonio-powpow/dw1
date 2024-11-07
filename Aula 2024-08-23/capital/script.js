let inputCapital = document.getElementById("capital")
let inputJuros = document.getElementById("juros")
let inputPeriodos = document.getElementById("periodos")
let botaoCalcular = document.getElementById("calcular")
let saidaMontante = document.getElementById("montante")

function calcularMontante(){
    let c = inputCapital.value
    let i = inputJuros.value
    let n = inputPeriodos.value
    
    let montante = c * ((1 + (i/100))**n)

    console.log(montante)

    saidaMontante.innerText = montante
}
botaoCalcular.onclick = calcularMontante