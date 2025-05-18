const array = [10, 2, 3, 20, 15];

const quadradoDosNumeros = (array) => {

    return novoArray = array.filter(numero => numero >= 10).map(numero => numero * numero);

}


console.log("o quadrados dos numero maior ou igual a 10 do array sao:"+quadradoDosNumeros(array));