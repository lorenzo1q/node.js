

// funzione arrow somma di due numeri
const somma = (a, b) => a + b;

const moltiplicazione = (a, b) => a * b;

const divisione = (a, b) => a / b;

const sottrazione = (a, b) => a - b;


const operazioni = [somma, moltiplicazione, divisione, sottrazione];

// funzione dell'array con i numeri 10 e 2
for (let i = 0; i < operazioni.length; i++) {
  console.log(operazioni[i](10, 2));
}
