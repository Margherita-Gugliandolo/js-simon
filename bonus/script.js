// 1. Crea 5 numeri casuali da 1 a 100
//inserisci i 5 numeri in un array
//Un alert espone l'array
// Cliccato sull x parte un timer di 30 secondi.
// 5 prompt (uno alla volta), "scrivi il numero che ricordi".
// inserisco i cinque numeri inseriti dall'utente in un array
//faccio un confronto di array e mostro i numeri dell'utente che sono uguali

// i numeri casuali del CPU
var arrayCPU = [];

for (var i = 0; i < 5; i++) {
  var numCPU = numeroCasualeComputer(1,100);
  if(controlloElemento(numCPU,arrayCPU)==false){
    arrayCPU.push(numCPU);
  }else{
    i++;
  }
}
console.log('array computer',arrayCPU);
// I numeri visti dall'utente
alert('ricorda questi numeri: ' + arrayCPU);

// Setto il timer
var numeroIniziale = 30;
var intervallo = setInterval(function(){
  document.getElementById('conto').innerHTML = numeroIniziale;
   if(numeroIniziale==0){
     clearInterval(intervallo);
   }else{
     numeroIniziale --;
   }
},1000);

var myTimer = setTimeout(function() {

//Chiedo cinque numeri all'utente alla scadenza del tempo e li inserisco in un array;

  var arrayUtente = [];

  for (var i = 0; i < 5; i++) {
    var tentativo = parseInt(prompt('scrivi il numero che ricordi:'));
    if(controlloElemento(tentativo,arrayUtente)==false){
      arrayUtente.push(tentativo);
    }else{
      i++;
    }
  }
  console.log('array utente',arrayUtente);

// Confronto i risultati

var punteggio = 0;
var numIndovinati = [];

      for (var i = 0; i < arrayUtente.length; i++) {
        if (arrayCPU.includes(arrayUtente[i])) {
          punteggio++
          numIndovinati.push(arrayUtente[i]);
        }
      }
      if (punteggio == 0) {

        document.getElementById('cd').innerHTML = 'Sei una schiappa!';
        console.log('sei una schiappa');
      } else {
        document.getElementById('cd').innerHTML = "Hai indovinato " + punteggio + " numeri su 5: " + numIndovinati;
      console.log("Hai indovinato " + punteggio + " numeri su 5: " + numIndovinati);
      }

}, 31000);













//Functions

// numeri casuali
function numeroCasualeComputer(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 var result = Math.floor(Math.random() * (max - min + 1)) + min;
 return result;
 }

 // Controllo se l'elemento è presente nell'array
 function controlloElemento(elemento, array){
  for (var i = 0; i < array.length; i++) {
    if (elemento == array[i]) {
      return true;
    }
}
 return false;
}
