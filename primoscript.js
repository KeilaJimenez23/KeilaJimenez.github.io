function siPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      
      return true;
    }
    for (var numero = 1; numero <= 15; numero++) {
        if (siPrimo(numero)) {
          console.log(numero + " es primo.");
        } else {
          console.log(numero + " no es primo.");
        }
      }