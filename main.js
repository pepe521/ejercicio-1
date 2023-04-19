t = prompt("Introduzca un texto");
c = t.length
ma = 0
mi = 0

for (x = 0; x < c; x++) {
  f = t.substr(x, 1);

  if (f == f.toLowerCase()) {
    mi++
  } else {
    ma++
  }
}
if (ma == 0) {
  alert("el texto esta formado por minusculas");
} else {
  if (mi == 0) {
    alert("el texto esta formado por mayusculas");
  } else {
    alert("el texto esta formado por mayusculas y minusculas");
  }
}
