console.log('ciao')

// Dichiaro array email
const email = ['paola@gmail.com', 'silvia@gmail.com', 'ciccio@live.it', 'gino@gmail.com', 'pippi@live.it'];
console.log(email);
//Chiedere email all'utente
let emailUtente = prompt('Inserisci la tua mail');
console.log(emailUtente);

//Controllare se email è già presente 
for (let i = 0; i < email.length; i++ ) {
    
    if (email !== emailUtente){
        email.push(emailUtente)
        console.log(emailUtente, email)
    }
}