let forma = 'triangulo';
let base = 20;
let altura =40;
//let areaRetangulo = altura * base;
//let areaTriangulo = (altura * base) / 2;
let area;

// Condicional Se... Então...

if( forma === 'retângulo' ){
    area = altura * base;
    console.log(area)
}else {
    area = (altura * base) / 2;
    console.log(area)
}

// Boolean
const usuariologado = true;
const contaPaga = false;

//truthly ou Falsy
// 0 -> false
// 1 -> true

console.log(0 == false); // retorna verdadeiro(True)
console.log('' == false); // retorna verdadeiro(True)
console.log(1 == true); // retorna verdadeiro(True)

console.log(contaPaga == 1)

// Undefined -> Nao definido;
// null-> vazio ou nulo;

let minhaVar;
let varNull = null;
let numero = 3;
let string = 'oi';


console.log(typeof minhaVar);
console.log(typeof varNull);
console.log(typeofnumero);
console.log(typeofstring);

//conversão implicita

const numeroNumber = 786
const numerostring = "786"

console.log(numeroNumber == numeroString) // (True)comparando os valores
console.log(numeroNumber === numeroString)// (false)comparando os tipos
console.log(numeroNumber + numeroString)// Conversão implícita (concatenação de String)

// convesão explicita

console.log(numeroNumber + Number(numeroString))
const numeroConvertido = Number(numeroString)
 console.log(numeroNumber + numeroConvertido)
 const numeroConvertidoErrado = Number("456b")
 console.log(numeroNumber + numeroConvertidoErrado)

