const string1 = prompt("Inserisci la prima parola");
const string2 = prompt("Inserisci la seconda parola");

if (string1.length === string2.length) {
  alert("Entrambe le parole sono lunghe uguali!");
} else {
  const shortestString = string1.length < string2.length ? string1 : string2;
  const longestString = string1.length > string2.length ? string1 : string2;

  alert(shortestString);
  alert(longestString);
}
