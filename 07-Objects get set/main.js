const pessoa ={
    _nome: '',
    get nome () {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    }
}

pessoa.nome = "rafaelzinho de jesus"
console.log(pessoa.nome)

/*Variaveis com _, significa uma variavel privada, onde
nao podem ser acessado por fora para ninguem acessar*/