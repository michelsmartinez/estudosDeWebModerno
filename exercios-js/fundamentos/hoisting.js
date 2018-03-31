console.log('a =', a)
var a = 2
console.log('a =', a)
/*printa:
a = undefined
a = 2

---------
seria o mesmo efeito de:
var a
console.log('a =', a)
a = 2
console.log('a =', a)


Obs.: o interpretador cuida disso, mas não seria bom utilizar isto
o nome disto é hosting, o interpretador faz a declaração em separado antes
da atribuição do valor
*/

