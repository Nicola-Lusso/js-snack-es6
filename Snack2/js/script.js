// 2) Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const pari = [];
const dispari = [];

for (let i = 0; i < num.length; i++){
    if (num[i] % 2){
        pari.push(num[i]);
        document.getElementById('green').innerHTML = pari;
    } else {
        dispari.push(num[i]);
        document.getElementById('red').innerHTML = dispari;
    }
}
