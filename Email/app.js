const emails = ["turinimattia96@gmail.com", "turinidavide98@gmail.com", "donatoriccio-teacher@gmail.com","panicuccisamuel@gmail.com" ] //array
const userEmail = prompt("inserisci la tua email");

let emailFound = false

for(let i = 0; i < emails.length; i ++) {
    const currentEmail = emails[i];
    if(userEmail === currentEmail) {
        emailFound = true   
    }        
}

if(emailFound === true){
    console.log("email trovata")
}else{
    console.log("email non trovata")
}



// const buttonDOMElement = document.querySelector(" .search");
// buttonDOMElement.addEventListener("click", function (){
//     const userEmail = "turinimattia96@gmail.com"; // string
//     let isEmailInArray = false;
//     //SCORRO TUTTO L'ARRAY EMAILS PER STAMPARE OGNI SINGOLO ELEMENTO (EMAILS)
//     for (let index = 0; index < emails.length; index ++) {
//         const email = emails[index]; //string 
//         console.log(email);
    
//         if (userEmail === emails){
//             isEmailInArray = true;
//         }
//     } 
    
//     if (isEmailInArray === true){
//         console.log("presente")
//     } else {
//         console.log("non presente")
//     }
// })
