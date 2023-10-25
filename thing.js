// función para verificar si un año es bisiesto y par
function esBisiestoYPar(anio) {
  // un año es bisiesto si es divisible por 4 y no por 100, o si es divisible por 400
  var bisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
  // un año es par si es divisible por 2
  var par = anio % 2 === 0;
  // devolver el resultado de la conjunción lógica de ambas condiciones
  return bisiesto && par;
}

// tomar entrada del usuario
var anio = prompt("Ingrese un año:");

// llamar a la función y mostrar el resultado
var resultado = esBisiestoYPar(anio);
console.log("El año " + anio + " es bisiesto y par: " + resultado);
