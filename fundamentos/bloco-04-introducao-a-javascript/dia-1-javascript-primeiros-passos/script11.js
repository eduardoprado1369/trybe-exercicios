let salariobruto = 5000
let salariobase;
let salarioliiquido;
if (salariobruto <= 1556.94) {
    salariobase = salariobruto - salariobruto * 0.08
} else if (salariobruto >= 1556.94 && salariobruto <= 2594.92) {
    salariobase = salariobruto - salariobruto * 0.09
} else if (salariobruto >= 2594.93 && salariobruto <= 5189.82) {
    salariobase = salariobruto - salariobruto * 0.11
} else if (salariobruto > 5189.82) {
salariobase = salariobruto - 570.88
}

if (salariobase < 1903.98) {
salarioliiquido = salariobase
} else if  (salariobase >= 1903.99 && salariobase <= 2826.65) {
    salarioliiquido = salariobase - salariobase * 0.075 + 142.80
} else if (salariobase >= 2826.66 && salariobase <= 3751.05) {
salarioliiquido = salariobase - salariobase * 0.15 + 354.80
} else if (salariobase >= 3751.06 && salariobase <= 4664.68) {
    salarioliiquido = salariobase - salariobase * 0.225 + 636.13
} else if (salariobase > 4664.68) {
    salarioliiquido = salariobase - salariobase * 0.275 + 869.36
} 

console.log('O salário líquido é ' + salarioliiquido)