function findMax(nums){
    let max = nums[0]
    for (let num of nums) {
        if (max < num) {
            max = num
        }
    }
    return max
}

console.log(findMax([10,50,30,40]))