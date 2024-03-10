//1) Observe o trecho de código abaixo:

let INDICE = 13; 
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K=  K + 1;
    SOMA= SOMA + K;
     
}  
 console.log(SOMA);

//2)

let input = document.getElementById("inputNumber");
const button = document.getElementById("button");

function GenerateFibonacci(number) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}

let f = GenerateFibonacci(10); //quantidade de números que deseja na sequência
console.log(f);

button.addEventListener("click", function() {
    exibirNumero(input.value);
    
});

function exibirNumero(valueNumber) {
    let isFibonacci = false;
    for (let i = 0; i < f.length; i++) {
        if (valueNumber == f[i]) {
            isFibonacci = true;
            break;
        }
    }
    if (isFibonacci) {
        console.log("O número " + valueNumber + " faz parte da sequência de Fibonacci");
    } else {
        console.log("O número " + valueNumber + " não faz parte da sequência de Fibonacci");
    }
}
/*3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, 9

b) 2, 4, 8, 16, 32, 64,128

c) 0, 1, 4, 9, 16, 25, 36, 49

d) 4, 16, 36, 64, 100

e) 1, 1, 2, 3, 5, 8, 13

f) 2,10, 12, 16, 17, 18, 19, 25*/ 

/*
3)
Primeira visita:

Ligue o interruptor 1 por alguns minutos e, em seguida, desligue-o.
Ligue o interruptor 2.
Mantenha o interruptor 3 desligado.
Vá para a sala onde estão as lâmpadas.
Segunda visita:

Se uma lâmpada estiver acesa, ela está conectada ao interruptor 1.
Toque na lâmpada que está apagada:
Se a lâmpada estiver quente, ela está conectada ao interruptor 2.
Se a lâmpada estiver fria, ela está conectada ao interruptor 3.
Dessa forma, você pode determinar qual interruptor controla cada lâmpada usando apenas duas visitas à sala das lâmpadas. */
//5)
function inverterString(str) {
    let inverted = '';
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}

// uso
const stringOriginal = 'Olá, mundo!';
const stringInvertida = inverterString(stringOriginal);
console.log('String original:', stringOriginal);
console.log('String invertida:', stringInvertida);