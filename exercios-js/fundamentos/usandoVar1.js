
//mesmo estando em um bloco diferente
//o var ainda será acessível por estar no mesmo escopo
{{{{var sera = 'Será??'}}}}
console.log(sera)

{
    {
        var talvez = 'talvez...'
    }
}
console.log(talvez)
//


//var dentro de funções ficam em escopos diferentes
function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local)
// gera erro pois a var local não está acessível

