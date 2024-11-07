function allEquals(arr){
    let last = arr[0]
    for (let element of arr){
        if (element != last) {
            return false
            break
        }
    }
    return true
}
console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false