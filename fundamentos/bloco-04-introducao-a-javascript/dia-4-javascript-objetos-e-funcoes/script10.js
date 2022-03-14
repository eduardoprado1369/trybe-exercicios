// let array = [2, 3, 6, 7, 10, 1];
// let maiorNumero = 0;
// function maiorNumeroDoArray(array) { for (let index = 0; index < array.length; index += 1 ) {
// if (array[index] > maiorNumero) {
//     maiorNumero = array[index]
//     return maiorNumero
// }
// }
// }
// console.log(maiorNumeroDoArray(array))

//let array = [2, 3, 6, 7, 10, 1];

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
if (numeros[indiceMaior] < numeros[indice]) {
    IndiceMaior = indice;
    console.log(indiceMaior)
}       
    } 
    return console.log(indiceMaior)
}
//indiceDoMaior([2, 3, 6, 7, 10, 1]))