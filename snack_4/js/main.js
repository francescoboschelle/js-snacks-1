const array = [];

for (let i = 1; i <= 6; i++) {
  const input = Number(prompt("Inserisci un numero"));

  if (!isNaN(input) && input % 2 !== 0) {
    array.push(input);
  }
}

alert(`Risultato: ${array}`);
