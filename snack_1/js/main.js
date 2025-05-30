const n1 = Number(prompt("Inserisci il primo numero"));

if (n1 && !isNaN(n1)) {
  const n2 = Number(prompt("Inserisci il secondo numero"));

  if (n2 && !isNaN(n2)) {
    if (n1 === n2) {
      alert("Entrambi i numeri sono uguali!");
    } else {
      alert(`${n1 > n2 ? n1 : n2} é il numero maggiore`);
    }
  } else {
    alert("Devi inserire un numero valido!");
  }
} else {
  alert("Devi inserire un numero valido!");
}
