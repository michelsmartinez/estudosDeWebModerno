let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) //printa 2
}
console.log('fora =', numero) //printa 1
// let já trabalha de uma forma diferente, pois separa os scopes
// e sempre procurando a variável primeiramente no scopo mais próximo


/* let tem 3 escopos:
    - escopo global;
    - escopo local;
    - escopo de bloco <- este é a grande diferença para o var
                         que não possui este escopo de bloco
*/

