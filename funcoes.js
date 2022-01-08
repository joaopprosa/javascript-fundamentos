//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)

//Funcao com retorno
function soma(a, b=0){
    return a + b
}

console.log(soma(4, 5))

//Armazenando uma funcao em uma variavel
const imprimirSoma2 = function (a, b){
    console.log(a + b)
}

imprimirSoma2(6, 7)

//Armazenando uma funcao arrow em uma variavel
const soma2 = (a, b) => {
    return a + b
}

console.log(soma2(8, 8))

//Retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(5, 3))