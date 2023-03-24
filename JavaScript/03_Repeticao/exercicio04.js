let x = 0
let userNumber = prompt("Digite um número: ")
while (x <= userNumber) {
    if (x % 2 === 0) {
        console.log(x);
    }
    x = x + 1;
}