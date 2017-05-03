/*Ejercicio 1
Creamos una función que tomará como parámetros un número y un array
de números. La función va a devolver el número de veces que está repetido
ese número en el array. Por ejemplo, si le pasamos un 1 y [1,3,4,2,1,3,4,5],
 la función devolverá un 2, porque el número 1 aparace dos veces en el array.*/

var countFives = []
var number = 5
var arrayNumbers = [3, 2, 3, 4, 5, 5, 6]

function cuentaNumerSos(numero, arrayNumbers) {
    for (var i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] === number) {
            countFives = +countFives + 1;
        }
    }
    return countFives
}

var result = cuentaNumerSos(number, arrayNumbers);
console.log(result);

/*Ejercicio 2
Vamos a crear una función JavaScript que toma un parámetro que es una cadena
(texto). Si la cadena es de longitud impar, devuelve el caracter central.
Si la longitud de la cadena es par, devuelve "Sólo funciono con cadenas de
longitud impar".*/

var cadena = "impar";

function caracterCentral(cadena) {

    if (cadena.length % 2 === 0) {
        return "solo funciono con cadenas de longitud impar"
    } else {
      var middle = Math.floor(cadena.length / 2);
      return cadena [middle];
    }
}

var center = caracterCentral(cadena)
console.log(center);

/*Ejercicio 3
Vamos a crear una función que toma un parámetro que es un array de números.
La función va a devolver un array que contiene sólo los números pares del
array original.*/

function encuentraPares(numbers) {
    var pairNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            pairNumbers[pairNumbers.length] = numbers[i];
        }
    }
    return pairNumbers;
}

function exercise() {
    var numbers = [2, 3, 4, 6, 7, 5, 2];
    var pairNumbers = encuentraPares(numbers);
    console.log(pairNumbers);
}

exercise();
