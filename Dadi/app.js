
const pressBtn = document.getElementById("pressBtn")
const dadoGiocatore = document.getElementById("dado-giocatore")
const dadoComputer = document.getElementById("dado-computer")
const risulato = document.getElementById("risultato")

pressBtn.addEventListener("click", function(){
    // Gioco dei dadi - CONSEGNA
    // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    // Stabilire il vincitore, in base a chi fa il punteggio più alto.

    // 1-Attribuire una variabile con valore  da 1 a 6 all'utente
    const user = Math.floor( Math.random() * 6) + 1;
    dadoGiocatore.innerHTML = user
    // 2-Attribuire una variabile con valore  da 1 a 6 al computer
    const computer = Math.floor( Math.random() * 6 ) + 1;
    dadoComputer.innerHTML = computer
    // 3-Creare un tasto che al click sul tasto stampi i due valori random 
    //  SE il risulato del valore dell'utente > di quello del computer
    //  stampiamo Vince il giocatore
    //  ALTRIMENTI SE il risultato del valore del computer è > di quello del giocatore
    //  stampiamo Vince il computer
    //  ALTRIMENTI SE il valore del giocatore è pari a quello del computer
    //  stampiamo Parità

    if (computer > user) {
        console.log("Vince il computer")
        risultato.innerHTML = "Vince il Computer"
        
    }else if(user > computer){
        console.log("Vince il giocatore")
        risultato.innerHTML = "Vince il Giocatore"
    }else {
        console.log("Parità")
        risultato.innerHTML = "Parità"
    }   
}
)



