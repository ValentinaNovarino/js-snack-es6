$(document).ready(function() {
    // // ***********SNACK1*************
    // // Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
    //
    // // creare un array di oggetti
    // const bikes = [
    //     {
    //         name: "MMR Kenta",
    //         weight: "10,54"
    //     },
    //     {
    //         name: "Olimpya F1X",
    //         weight: "10,80"
    //     },
    //     {
    //         name: "Torpado Matador X",
    //         weight: "10,44"
    //     },
    //     {
    //         name: "Santa Cruz Blur",
    //         weight: "11,12"
    //     }
    // ];
    // console.log(bikes);
    //
    // // // stampare a schermo le proprietà nome e peso dell'array di oggetti
    // // bikes.forEach((bike) => {
    // //     console.log(
    // //         `
    // //             ${bike.name}
    // //             ${bike.weight}
    // //         `
    // //     );
    // // });
    //
    // let lessBikeWeight = bikes[0]
    //
    // bikes.forEach((element)=> {
    //     if(element.weight < lessBikeWeight.weight) {
    //         lessBikeWeight = element;
    //     }
    // });
    //
    // console.log(lessBikeWeight);
    //
    // const {name, weight} = lessBikeWeight;
    // document.getElementById('container').innerHTML =
    // `<ul>
    //     <li>Nome: ${name}</li>
    //
    //     <li>Peso: ${weight}</li>
    // <ul>`

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
