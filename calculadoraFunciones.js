function sumaDeTresNumeros(num1, num2, num3) {
    let suma = (num1 + num2 + num3);
    return num1 + num2 + num3;
}
console.log(sumaDeTresNumeros(15, 20, 11));

// ---------------------------------------------------------------

function multiplicacionDeDosNumeros(num1, num2) {
    let multiplicacion = (num1 * num2);
    return `la multiplicacion de los numeros es ${multiplicacion}`
}
console.log(multiplicacionDeDosNumeros(25, 25));

// ---------------------------------------------------------------

let divisionDeDosNumeros = function (valor1, valor2) {
    let division = valor1 / valor2;
    return division;
}
console.log(divisionDeDosNumeros(50, 5));

// ---------------------------------------------------------------

let restadedosnumeros = (res1, res2) => {
    let resta = res1 - res2;
    return resta;
}
console.log(restadedosnumeros(80, 25));


// ---------------------------------------------------------------


let total = 0, valoresASumar = [15, 20, 50, 80, 55];
valoresASumar.forEach(function (suma) {total = total + suma });

console.log(total)