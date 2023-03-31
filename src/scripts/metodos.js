const numeros = [43, 68, 12, 47, 25, 51];

function comportamentoMetodoMap(elemento, index, array) {
    elemento = array[index] * 2;
    return elemento;
}
function verificarComportamentoMap(array, callback) {
    const arrayTest = [];
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i];
        arrayTest.push(callback(currentValue, i, array));
    }
    return arrayTest;
}
console.log(verificarComportamentoMap(numeros, comportamentoMetodoMap));


let comportamentoMetodoFilter = (elemento, index, array) => {
    if (array[index] >= 35) {
        return elemento;
    }
}
function verificarComportamentoFilter(array,callback) {
    const arrayTest = [];
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i];
        if(callback(currentValue, i, array) != undefined){
            arrayTest.push(callback(currentValue,i,array));
        }
    }
    return arrayTest;
}
console.log(verificarComportamentoFilter(numeros,comportamentoMetodoFilter));




const comportamentoMetodoFind = (elemento, index, array) => {
    if (array[index] > 25) {
        return elemento;
    }
}
function verificarComportamentoFind(array,callback) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i];
        result = callback(currentValue, i, array);
        if (result != undefined) {
            return result;
        }
    }
}
console.log(verificarComportamentoFind(numeros,comportamentoMetodoFind));



function comportamentoMetodoReduce(elemento, soma) {
    return soma += elemento;
}
function verificarComportamentoReduce(array, callback) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i];
        soma = callback(currentValue, soma);
    }
    return soma;
}
console.log(verificarComportamentoReduce(numeros, comportamentoMetodoReduce));



function comportamentoMetodoIncludes(index, verificarNumero) {
    if(index == verificarNumero){
        return true
    }
}
function verificarComportamentoIncludes(array,verificarNumero,callback) {
      for (let i = 0; i < array.length; i++) {
        if(callback(array[i],verificarNumero) == true){
            return true;
        }
    }
    return false;
    
}
console.log(verificarComportamentoIncludes(numeros,150,comportamentoMetodoIncludes));



function comportamentoMetodoIndexOf(searchElement, index) {
        if(searchElement == index){
            return true;
        }
}
function verificarComportamentoIndexOf(array,verificarPosicao,callback) {
        for(let i = 0; i<array.length; i++){
            if(callback(verificarPosicao,array[i]) == true){
                return i;
            }
        }
    return -1;
}
console.log(verificarComportamentoIndexOf(numeros,25,comportamentoMetodoIndexOf))
