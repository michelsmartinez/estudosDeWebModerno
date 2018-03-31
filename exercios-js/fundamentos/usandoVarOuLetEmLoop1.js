for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i)
// isto é um problema pois o var i segue disponível depois do for
// pode gerar problemas


for (let j = 0; j < 10; j++) {
    console.log(j)
}
console.log('j =', j)
// gera erro neste .log, pois o let j não está mais disponível 
// fora do for

// bons motivos para se usar o let...