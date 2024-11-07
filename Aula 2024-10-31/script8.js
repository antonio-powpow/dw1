function getEvenNumbers(arr) {
    pares = []
    for (let item of arr){
        if (item % 2 == 0){
            pares.push(item)
        }
    }
    return pares
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])) // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])) // Deve exibir: [10, 20]
