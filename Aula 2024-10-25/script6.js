function toSnakeCase(str) {
    str = str.toLowerCase()
    let snakeCase = str.replace(/ /g,"_")

    return snakeCase
}
console.log(toSnakeCase("Ola mundo ola"))