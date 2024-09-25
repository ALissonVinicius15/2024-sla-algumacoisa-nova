// Funções

console.log(X)

// Declarar uma função
// estrutura nome da função (parâmetros) { funcionalidade }
function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto('sou aluno de front-end')
imprimeTexto('olá mundo')

function soma() {
    return 2+2
}
imprimeTexto(soma())
//console.log(soma())
function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}

imprimeTexto(somaDeNumero(10, 8))
 function divisaoDeNumeros (numero1, numero2){
    return numero1 + numero2
 }

 imprimeTexto(divisaoDeNumeros(10, 2))
 imprimeTexto(divisaoDeNumeros(2, 10))

 // Ordem de parâmetros

 function apresentacao(nome, idade){
    return `Meu nome é $(nome)e tenho $(idade) anos`
 }

 imprimeTexto(apresentacao('Alisson', 16))
 imprimeTexto(apresentacao(16, 'Alisson'))// A ordem dos parâmetros é importante

 // Parâmetros inicial, para que a funçao começe com um paãmetro pré-definido
 function multiplicacao(n1 = 1, n2 = 1){
    return n1 * n2
    imprimeTexto(multiplicacao(2, 5))
