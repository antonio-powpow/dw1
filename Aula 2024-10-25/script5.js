function getInicials(name){
    name = name.split(" ")
    let abrev = ""
    for (let i = 0; i < name.length; i++){
        abrev += name[i][0].toUpperCase()
    }
    return abrev
}
console.log(getInicials("Antonio Teixeira"))