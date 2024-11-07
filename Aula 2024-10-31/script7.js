function mergeArrays(arr1,arr2){
    return [...arr1,...arr2] // Sintaxe de Espalhamento (...)
}

console.log(mergeArrays([1, 2], [3, 4])) // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])) // Deve exibir: ["apple", "banana", "cherry"]