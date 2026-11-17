

const operazioni = {
  descrizione: "oggetto operazioni",

  somma: (a, b) => a + b,
  sottrazione: (a, b) => a - b,
  moltiplicazione: (a, b) => a * b,
  divisione: (a, b) => a / b
};

console.log(operazioni.descrizione);
console.log("100 + 100 = " + operazioni.somma(100, 100))
console.log("100 - 7 = " + operazioni.sottrazione(100, 7));
console.log("5 * 5 = " + operazioni.moltiplicazione(5, 5));
console.log("100 / 5 = " + operazioni.divisione(100, 5));
