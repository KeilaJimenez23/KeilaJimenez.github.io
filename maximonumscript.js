function encontreNumero(numero1, numero2) {
    if(numero1 > numero2){
        return numero1
    } else {
        return numero2; 
    }
}
var numeroA = 20;
var numeroB = 36;

var encontrarmaximo = encontreNumero(numeroA, numeroB);

console.log("El número máximo es: " + encontrarmaximo);
