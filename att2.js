const numero = [1, 2, 34, 5, 6, 7,];

const numerosPares = (array) => {

    return array.filter(numero => numero % 2 === 0).map(par => par * 2)

}


console.log("os numero pares multiplicado por 2 sao:"+numerosPares(numero));