#!/usr/bin/env node

/**
 * Calcolatrice da riga di comando
 *
 * Utilizzo:
 *   node calcolatrice.js 5 add 3
 *   node calcolatrice.js 10 minus 4
 *   node calcolatrice.js 6 multiplication 7
 *   node calcolatrice.js 20 division 5
 */

const args = process.argv.slice(2);

const a = Number(args[0]);
const operazione = args[1];
const b = Number(args[2]);

if (operazione === "add") {
  console.log(a + b);
} else if (operazione === "minus") {
  console.log(a - b);
} else if (operazione === "multiplication") {
  console.log(a * b);
} else if (operazione === "division") {
  console.log(a / b);
} else {
  console.log("errore");
}

