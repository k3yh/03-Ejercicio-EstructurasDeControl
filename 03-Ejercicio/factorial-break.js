const numero = 10; 
let resultado = numero;
let i = numero-1;

while(i > 0){
    resultado = resultado * i;
    i--;
    {
        if(i == 1){
            console.log('se ha cumplido la condicion')
            break;
        }
    }
}
console.log(resultado)