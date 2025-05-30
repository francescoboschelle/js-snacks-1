const string1 = prompt("Inserisci la prima parola");

if (string1) {
  const string2 = prompt("Inserisci la seconda parola");

  if (string2) {
    if (string1.length === string2.length) {
      alert("Entrambe le parole sono lunghe uguali!");
    } else {
      alert(string1.length < string2.length ? string1 : string2);
      alert(string1.length > string2.length ? string1 : string2);
    }
  } else {
    alert("Devi inserire almeno una parola!");
  }
} else {
  alert("Devi inserire almeno una parola!");
}

// ALTERNATIVA
/* if (string1.length === string2.length) {
  alert("Entrambe le parole sono lunghe uguali!");
} else if (string1.length > string2.length) {
  alert(string2);
  alert(string1);
} else {
  alert(string1);
  alert(string2);
} */
