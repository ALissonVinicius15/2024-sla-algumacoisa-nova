// Alguns erros

let numero = 12 // O javaScript é sensível ao capsLock
//console.log(numero) // Erro de declaração, variável não declarada

//console.log(numero //Erro de sintaxe, faltas de perenteses

//tratamento de erros

//console.error('A lista não está executando a média') // Declara um erro para outro usuário
 
const idadeMinima = 18
let idadeCliente = 17

if(idadeCliente >= idadeMinima){
    console.log('Cerveja')
}else {
    console.log('suco')
}

// Valor ternário
idadeCliente = 20

//modo ternário, ____ <= ____ ? ----- : -----
// modo ternário, ____ == ____ ? ----- : -----
console.log(idadeCliente >= idadeMinima ? 'Cerveja' : 'suco')
                    // => uma funçáo arrow, completamente diferente de maior igual
// utilizar com cuidado

const nome = "Alisson"
const idade = 16
const CidadeNascimento = "Foz do Iguaçu"

const apresentacao = "meu nome é " + nome + " tenho " + idade = " anos e nasci em " + CidadeNascimento

// Template string

const apresentacaoII = ``Sou o ${nome} e tenho ${idade} anos de idade . Nasci na cidade de ${CidadeNascimento}

console.log(apresentacaoII)