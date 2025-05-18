const array = [1,2,3,4,5,6];

const somarNumerosDosArray =(array) =>{
    return novoArry = array.reduce((somaAtual ,novaSoma) => somaAtual + novaSoma);

}

console.log("A soma de todos numeros do array é: "+somarNumerosDosArray(array));