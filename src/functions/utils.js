// Manipulación de Arrays y Strings
// invierta una cadena de texto sin utilizar métodos
export const invertirCadena = (cadena) => {
  let cadenaInvertida = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
  }
  return cadenaInvertida;
};

// Encuentra el número más frecuente en un array:
export const numeroMasFrecuente = (arr) => {
  const map = {};
  let maxCount = 0;
  let mostFrequent;

  arr.forEach((num) => {
    map[num] = (map[num] || 0) + 1;
    if (map[num] > maxCount) {
      maxCount = map[num];
      mostFrequent = num;
    }
  });
  return mostFrequent;
};

// Invierte palabras de una oración:
export const invertirPalabras = (oracion) => {
  return oracion.split(" ").reverse().join(" ");
};

// Estructuras de Control y Bucles
// Imprime números del 1 al 100, pero:
// Para múltiplos de 3, imprime "Fizz".
// Para múltiplos de 5, imprime "Buzz".
// Para múltiplos de ambos, imprime "FizzBuzz".

export const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// Genera la serie de Fibonacci:

export const fibonacci = (n) => {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
};

// Recursión
// Factorial de un número:
// Calcula el factorial de un número usando recursión.

export const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};


// Manipulación de Objetos
// Filtrar propiedades específicas:
// Dado un array de objetos, devuelve solo los objetos que contienen una propiedad específica con cierto valor.

function filtrarPorPropiedad(arr, key, value) {
  return arr.filter((obj) => obj[key] === value);
}

// Ejemplo:
const personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "María", edad: 25 },
  { nombre: "Pedro", edad: 30 },
];
console.log(filtrarPorPropiedad(personas, "edad", 30));

// Encuentra el elemento único:
// En un array donde todos los elementos aparecen dos veces excepto uno, encuentra el único elemento único.
export const elementoUnico = (arr) => {
  return arr.reduce((acc, num) => acc ^ num, 0);
};

// Encuentra pares que sumen a un número dado:
// Dado un array y un número, encuentra todos los pares que suman ese número.

export const encontrarPares = (arr, suma) => {
  const pares = [];
  const set = new Set();

  for (const num of arr) {
    const complemento = suma - num;
    if (set.has(complemento)) {
      pares.push([num, complemento]);
    }
    set.add(num);
  }

  return pares;
};

// Dado dos arrays, escribe una función que determine si hay al menos un elemento común
// entre ambos. Devuelve true si tienen elementos comunes y false en caso contrario."

export const tienenElementoComun = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1].some((elem) => set2.has(elem));
};
