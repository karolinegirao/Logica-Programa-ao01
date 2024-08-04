//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
// Pedir ao usuário um número para iniciar a contagem progressiva
let numero = prompt("Digite um número:");

// Validar se o valor inserido é um número
numero = parseInt(numero);

// Verificar se o número é válido
if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    let contador = 0;

    // Usar um loop while para contar regressivamente até 0
    while (contador <= numero) {
        console.log(contador);
        contador++;
    }

}





//------------------------------------------------------------------------------------------------//

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// Pedir ao usuário um número para iniciar a contagem regressiva
// let numeroInicial = prompt("Digite um número para iniciar a contagem regressiva:");

// // Validar se o valor inserido é um número
// numeroInicial = parseInt(numeroInicial);

// // Verificar se o número é válido
// if (isNaN(numeroInicial)) {
//     console.log("Por favor, digite um número válido.");
// } else {
//     console.log(`Contagem regressiva iniciando de ${numeroInicial}:`);

//     // Usar um loop while para contar regressivamente até 0
//     while (numeroInicial >= 0) {
//         console.log(numeroInicial);
//         numeroInicial--;
//     }

//     console.log("Contagem regressiva concluída!");
// }



//------------------------------------------------------------------------------------------------//

// while(contador > 0){
//     let numero = parseInt(prompt('Digite o número:'));
//     soma += numero;
//     contyuador--;  // Decrementar o contador para que o loop termine após a quantidade de números desejada
// }
//------------------------------------------------------------------------------------------------//
//Crie um conttador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador = 10;
// while (contador >= 0){
//     console.log(contador);
//     contador--;
// }u



//------------------------------------------------------------------------------------------------//
// //Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador = 1;

// while (contador <= 10) {
//   console.log(contador);
//   contador++;
// }


//------------------------------------------------------------------------------------------------//
// let contador =10;
// while(contador >=0){
//     console.log(contador);
//     contador--
// }

// let contador = 1;
// while (contador <=10){
//     console.log(contador);
//     contador++
// }
//------------------------------------------------------------------------------------------------//

// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// console.log(numeroSecreto);
// let chute; 
// let tentativas = 1;

// //entanto chute não for igual ao numero secreto
// while (chute != numeroSecreto){
//     chute = prompt('Escolha um número entre 1 e 10');
//     // se chute for igual ao número secreto
//     if (chute == numeroSecreto) {
//         alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//     } else {
//         if (chute > numeroSecreto){
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         //tentativas = tentativas +1;
//         tentativas++
//     }
// }
//-----------------------------------------------------------------------------------------------//
// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = qtdNumeros;  // Aqui, contador deveria ser um número, não a string qtdNumeros

// while(contador > 0){
//     let numero = parseInt(prompt('Digite o número:'));
//     soma += numero;
//     contador--;  // Decrementar o contador para que o loop termine após a quantidade de números desejada
// }

// let media = soma / qtdNumeros;

// console.log(media);