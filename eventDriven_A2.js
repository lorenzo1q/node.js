


const hoFinito = () => console.log("lavoro completato!");
const nonRiesco = () => console.log("Non sono capace!");

// pippo riceve la funzione callback come argomento
function pippo(callback) {

  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  callback();
}

// chiamo pippo passando la prima callback
pippo(hoFinito);
// chiamo pippo passando la seconda callback
pippo(nonRiesco);
