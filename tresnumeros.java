public class EncontreMin {
    public static void main(String[] args) {
        int numero1 = 10;
        int numero2 = 6;
        int numero3 = 4;
        
        int minimo = numero1;
        if (numero2 < minimo) {
            minimo = numero2;
        }
        if (numero3 < minimo) {
            minimo = numero3;
        }
        
        System.out.println("El mínimo es: " + minimo);
    }
}