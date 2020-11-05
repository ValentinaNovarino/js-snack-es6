$(document).ready(function() {
    // ************SNACK2*************
    // Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

    // creo un array di nomi
    const names = ['Mario', 'Maria', 'Anna', 'Francesca', 'Luigi', 'Valerio', 'Giacomo'];

    let number1 = parseInt(prompt('Scegli un  umero comrpeso tra 0 e 6'));
    console.log(number1);
    let number2 = parseInt(prompt('Scegli un  umero comrpeso tra 0 e 6'));
    console.log(number2);

    let includingNames = names.filter((element, index) => index >= number1 && index <= number2);
    console.log(includingNames);
});
