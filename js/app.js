console.log('ciao')

// Dichiaro array email
const email = ['paola@gmail.com', 'silvia@gmail.com', 'ciccio@live.it', 'gino@gmail.com', 'pippi@live.it'];
// console.log(email);
//Chiedere email all'utente
let emailUtente = prompt('Inserisci la tua mail');
// console.log(emailUtente);

//console.log(email, emailUtente)


let controlloEmail = 0
console.log(controlloEmail)

//Controllare se email utente è già presente 
for (let i = 0; i < email.length; i++ ) {
    console.log(email[i]);

    if (email[i] !== emailUtente){
        console.log("non ho trovato la mail");
    }else {
        console.log('ho trovato la mail')
    }
    
}

// console.log("la mail è presente!");






//GIOCO DEI DADI
console.log('Gioco dei dati')
//Generare numero random per l'utente e per il pc
let numeroRandomUtente = Math.floor(Math.random()*6);
let numeroRandomPc = Math.floor(Math.random()*6);
console.log(numeroRandomUtente, numeroRandomPc)

//Stabilire il vincitore in base al punteggio più alto

let vincitore

if (numeroRandomUtente < numeroRandomPc) {
    let vincitore = numeroRandomPc
    console.log('Non hai vinto')
}else {
    let vincitore = numeroRandomUtente 
    console.log('Hai vinto')
}