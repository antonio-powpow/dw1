// 1

const carro = {
    marca: 'Subaru',
    modelo: 'Impreza',
    ano: 1998
}

// 2

console.log(carro.marca)
carro.ano = 2021
console.log(carro.ano)

// 3

carro['cor'] = 'Azul'
delete carro.modelo
console.log(carro)

// 4

const pessoa = {
    nome: 'Zé',
    idade: 18,
    cumprimento() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

pessoa.cumprimento()

// 5

const produto = {
    nome: 'Margarina',
    preco: 10.99,
    categoria: 'Alimentos'
}

for (i in produto) {
    console.log(`${i} : ${produto[i]}`)
}

// 6

const biblioteca = [
    {
        titulo: 'Dom Quixote',
        ano: 1605,
        autor: 'Miguel de Cervantes'
    },
    {
        titulo: 'Cem Anos de Solidão',
        ano: 1967,
        autor: 'Gabriel García Márquez'
    },
    {
        titulo: '1984',
        ano: 1949,
        autor: 'George Orwell'
    }
]

console.log(biblioteca.map(livro => livro.titulo))

// 7

const carrinho = {
    itens: [
        {nome: 'Camisa', preco: 50},
        {nome: 'Calça', preco: 100},
        {nome: 'Tênis', preco: 250}
    ],
    calcularTotal: function() {let soma = 0; for (let i of this.itens){soma+=i['preco']}; return soma}
}

console.log(carrinho.calcularTotal())

// 8

const aluno = {
    nome: 'Antonio',
    idade: 16,
    curso: 'TI'
}

const {nome, curso} = aluno

console.log(`Nome: ${nome}, Curso: ${curso}`)

// 9

const objetos = [
    {
        id: 1,
        nome: 'Lápis',
        quantidade: 12
    },
    {
        id: 2,
        nome: 'Borracha',
        quantidade: 8
    }
]

const atualizarQuantidade = function(id, qtd){objetos[id - 1]['quantidade'] = qtd}

atualizarQuantidade(1, 20)
console.log(objetos)

// 10

const usuarios = [
    {nome: 'Antonio', idade: 16, email: 'antonio@gmail.com'},
    {nome: 'Gabriel', idade: 16, email: 'gabriel@gmail.com'},
    {nome: 'Pedro', idade: 17, email: 'pedro@gmail.com'}
]

const emailUsuarios = usuarios.map(usuario => {return {nome: usuario.nome, email: usuario.email}})

console.log(emailUsuarios)