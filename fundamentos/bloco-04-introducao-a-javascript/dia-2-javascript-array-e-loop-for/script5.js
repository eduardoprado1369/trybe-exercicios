let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroTeste;
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index += 1) {
    numeroTeste = numbers[index]
    if (numeroTeste > maiorNumero) {
        maiorNumero = numeroTeste
    }
}   
console.log(maiorNumero)