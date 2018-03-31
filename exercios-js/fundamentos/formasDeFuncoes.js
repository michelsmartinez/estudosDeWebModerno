// Armazenamendo uma função em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const substracao = (a, b) => a - b
console.log(substracao(2, 3))