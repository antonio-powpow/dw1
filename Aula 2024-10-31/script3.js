function countOccurrences(arr, elmnt){
    let count = 0
    for (let element of arr) {
        if (element == elmnt) {
            count++
        }
    }
    return count
}