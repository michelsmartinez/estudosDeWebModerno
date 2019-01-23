const produto = Object.preventExtensions ({
    nome: 'Laranja', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)


// Com Seal:

const pessoa = { nome: 'Fulano', idade: 28 }
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'

delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// freeze também é possível, porém não é possível modificar nada, exluir ou inserir dados
