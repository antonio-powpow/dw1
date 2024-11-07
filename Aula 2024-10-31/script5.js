function removeDuplicates(arr) {
    let arrayy = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (!arrayy.includes(arr[i])) {
        arrayy.push(arr[i]);
      }
    }
    
    return arrayy;
  }
  console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]