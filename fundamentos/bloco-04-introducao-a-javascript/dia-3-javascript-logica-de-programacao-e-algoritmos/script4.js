let maiorNumeroPrimo = 0;
for (let index = 0; index <= 50; index += 1) { 
    let primo = true;
    for (let index2 = 2; index2 < index; index2 += 1) {
        if (index % index2 === 0) {
            primo = false; 
        } if (primo === true) {
            maiorNumeroPrimo = index;
        }
    }
}
console.log(maiorNumeroPrimo)








// let numerosPrimos = [];
// let divisor;
// let numeroDeDivisoes = 0
// for (let index = 1; index <= 50; index += 1) {
//  for (let index2 = 1; index2 <= 50; index2 += 1) {
//     if (index % index2 === 0) { 
// numeroDeDivisoes += 1
//     } if (numeroDeDivisoes >= 3) {
//         numerosPrimos.push(index)
//     }
//  }
// }
// console.log(numerosPrimos)
