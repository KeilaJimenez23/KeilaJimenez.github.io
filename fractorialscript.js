function factorialConBucle(numero) {
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
  }
  var numero = 7;
var resultado = factorialConBucle(numero);
console.log("El factorial de " + numero + " es " + resultado);