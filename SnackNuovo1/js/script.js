// jsnack 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const bici = [
  {
    nome: 'rx',
    peso: 12
  },
  {
    nome: 'm-bike',
    peso: 24
  },
  {
    nome: 'ciao',
    peso: 16
  },
  {
    nome: 'penny',
    peso: 27
  }
];

const [bici1, bici2, bici3, bici4] = bici;

let pesoMin = bici[0];

for (let i = 0; i < bici.length; i++) {
 if (bici[i].peso < pesoMin.peso) {
   pesoMin = bici[i];
 }
}
console.log('La bici pù leggera è la ' + pesoMin.nome + '  ' + 'che pesa  ' + pesoMin.peso + ' kg.' );
