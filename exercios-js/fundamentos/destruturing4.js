function rand([min = 0, max =1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 10]))
console.log(rand([999999]))
console.log(rand([, 1000]))
console.log(rand([]))
//console.log(rand()) gera erro exatamente por tentar desestruturar um objeto que não existe