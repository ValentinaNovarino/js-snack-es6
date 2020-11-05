$(document).ready(function() {
    // ***************SNACK3**************
    // A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

    // creo array prodotti
    const flowers = [
        {
            name: "rose",
            color: "red",
            price: 3.00
        },
        {
            name: "sunflower",
            color: "yellow",
            price: 3.50
        },
        {
            name: "tulip",
            color: "pink",
            price: 2.50
        },
        {
            name: "peony",
            color: "white",
            price: 3.50
        }
    ];

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getRandomChar = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const letter = alphabet[randomNumber(0, alphabet.length -1)];

        return letter;
    };

    const copyFlowers = flowers.map((element) => {
        const copyElement = {
            ...element,
            position: getRandomChar()
        };

        return copyElement;
    });

    console.log('array di partenza', flowers);
    console.log('nuovo array', copyFlowers);
});
