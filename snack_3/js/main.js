let sum = 0;
for (let i = 1; i <= 10; i++) {
  const input = Number(prompt("Inserisci un numero"));

  if (!isNaN(input)) {
    sum += input;
  } else {
    alert("Devi inserire un numero valido! Per questo valore verrá usato 0.");
  }
}

alert(`Risultato: ${sum}`);
