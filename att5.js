const numerosPrimos = (numero) => {

    if (numero < 1) {
        return false;
    } if(numero === 2 ){
        return true;
    }if (numero % 2 === 0 ) {
        return false;
    }
    return true;
}
console.log("Esse numero é primo:"+numerosPrimos(1));