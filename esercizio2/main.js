// ES 2: Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.
// Esempi:

//     Input : 9
//     Output :  1 cifra

//     Input : 99
//     Output :  2 cifre 



// lancio il prompt
let num = +prompt("Inserisci un valore intero tra 1 e 9999")
// creo la funzione
function countNumnber(num) {
// creo una variabile per trasformare il numero in stringa, in modo che possa metterli a confronto - altrimeti darebbe errore
    let stringa = num.toString()
    // creo la varriabile count e le dico per contare il numero di cifre, ovvero la lunghezza della stringa
    let count = stringa.length
    // se il numero è compsto da 4 cifre o meno
    if (count <= 4) {
        // stamperà in console la variabile count seguita da uno spazio, seguita dalla stringa cifre
        console.log(count + " " + "cifre");
        return count;
    }
    // qualora non si verificasse la conzione della funzione countNumnber allora non �� valid
    else {
        o
        console.log ("il valore inserito non è valido");
    }


}
// perchè la funzione venga eseguita la richiamo
countNumnber(num)
