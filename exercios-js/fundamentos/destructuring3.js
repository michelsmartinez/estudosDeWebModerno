function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min ) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 10 }
console.log(rand(obj))
console.log(rand({ min: 955 })) // pegará o max default (1000)
console.log(rand({})) // pagará max e min do default
//console.log(rand()) neste caso temos um problema pois o destructuring vai tentar pegar undefine.min e undefine.max
//o que gera o erro