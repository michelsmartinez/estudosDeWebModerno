const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
// printa 10 10

// isto é um problema histórico do JS
const funcs2 = []
for (let j = 0; j < 10; j++) {
    funcs2.push(function() {
        console.log(j)
    })
}

funcs2[2]()
funcs2[8]()
// printa 8 e 2

// o let consegue lembrar o scopo do momento em que foi adicionada a função
// no array