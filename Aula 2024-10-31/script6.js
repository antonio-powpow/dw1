function average(arr){
    let sum = 0
    for (let num of arr){
        sum += num
    }
    return sum/arr.length
}
console.log(average([1, 2, 3, 4])) // Deve exibir: 2.5
console.log(average([10, 20, 30])) // Deve exibir: 20