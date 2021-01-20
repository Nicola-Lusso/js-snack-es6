// jsnack 2
// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numPrimo = parseInt(prompt('Inserire primo valore'));
const numSecondo = parseInt(prompt('Inserire secondo numero'));
const myArrayNuova = [];

myArray.forEach((array, index) => {
  if (array > numPrimo && array < numSecondo) {
    myArrayNuova.push(array);
  }
});

console.log(myArrayNuova);
