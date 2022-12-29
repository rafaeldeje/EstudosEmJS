const minhaLista =[]
const minhaListaDeTarefas = [
    'mandar email', 
    'colocar comida para o dog',
    'limpar o quarto'
]

//console.log(minhaListaDeTarefas[0])
//console.log(minhaListaDeTarefas[1])
//console.log(minhaListaDeTarefas[2])
//console.log(minhaListaDeTarefas[3])
//console.log(minhaListaDeTarefas[4])

//quantidade de itens no array
//console.log(minhaListaDeTarefas.length)
//lenght verá quantos itens tem na array dentro dos []

// adicionar item
minhaListaDeTarefas.push('formatar computador')
//função push sempre acrescenta um item novo ao final da lista

//remover o ultimo da lista
//const ultimo = minhaListaDeTarefas.pop()
//console.log(ultimo, minhaListaDeTarefas)

//remover o primeiro da lista
//const primeiro = minhaListaDeTarefas.shift()
//console.log(primeiro, minhaListaDeTarefas)

//remover um item especifico do indice
//console.log(minhaListaDeTarefas[3])
//qual item de inicio
//quantos remover
//minhaListaDeTarefas.splice(2,1)
//console.log(minhaListaDeTarefas)

const itens = [
    1, 'computador', 0.22
]

//verificar o tipo de array
//console.log(typeof(itens))

//verificando se é array da forma correta
//console.log(Array.isArray(itens))

//ordenar a lista
//const numeros = [3,2,1,0] or ['d,'e','r','s','a','f']
//console.log(numeros.sort())

//juntar dois arrays
//const novo = itens.concat([1,2,3])
//console.log(novo)

//juntar arrays em uma string
//console.log(itens.join(','))

//verificar indice de um item no array
//const index = itens.indexOf ('computador')
//console.log(itens[index])