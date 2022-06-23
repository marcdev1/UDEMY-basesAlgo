console.log("OK DEBUT");
console.log("---------- UDEMY: Les bases indispensables de la programmation : Algorithmique ------------")
console.log("------------------------ EP 39: Deux execices : ex 2 ---------------------")

// DEBUT

const nbTesté = 7 ;
let résultat = 0;

function nbPair(nbTesté) {
    // nbTesté % 2 ;
    résultat = nbTesté % 2 ;
    if (résultat=0) {
        console.log(`${nbTesté} est un nombre PAIR!`);
    } else {
        console.log(`${nbTesté} est un nombre IMPAIR!`)
    }
}
nbPair(nbTesté);