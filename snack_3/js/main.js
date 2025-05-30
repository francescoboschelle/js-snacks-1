const numbers = [];
for (let i = 1; i <= 10; i++) {
  const input = Number(prompt("Inserisci un numero"));

  if (input && !isNaN(input)) {
    numbers.push(input);
  } else {
    alert("Devi inserire un numero valido! Per questo valore verrá usato 0.");
    numbers.push(0);
  }
}

let sum = 0;
for (let i = 0; i <= numbers.length - 1; i++) {
  sum += numbers[i];
}

alert(`Risultato: ${sum}`);
