// 3) Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


const primaParola = prompt("Inserire una parola");
const secondaParola = prompt("Inserire la seconda parola");

if(primaParola.length > secondaParola.length) {
  console.log("La parola più lunga è", primaParola);
} else if(primaParola.length < secondaParola.length) {
  console.log("La parola più lunga è", secondaParola);
} else {
  console.log("Le parole hanno la stessa lunghezza");
}
