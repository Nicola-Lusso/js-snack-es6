// 1) Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
const num = parseInt(prompt("Inserire un numero"));

if(num % 2) {
  console.log(num + 1);
} else {
  console.log(num);
}
