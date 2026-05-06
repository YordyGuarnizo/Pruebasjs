// el div de id cuadrado
document.getElementById("cuadrado").innerHTML =
  "<strong>listo!</strong><br>soy cuadrado";

// el parrafo por clase
document.getElementsByClassName("texto")[0].innerHTML = "se cambia el texto";
document.getElementsByClassName("texto")[1].innerHTML =
  "se cambia pero para el segundo";

// el h2 usando su etiqueta
document.getElementsByTagName("h2")[0].innerHTML = "titulo cambiado!!!";
document.getElementsByTagName("h2")[1].innerHTML = "titulo re contra cambiado";

// el span con querySelector
document.querySelector(".clima").innerHTML = "Lluvioso";

// formulario
document.getElementsByClassName("mi-form")[0].innerHTML =
  "<p>enviado con exito</p>";

// agregando a la lista con +=
document.getElementsByTagName("ul")[0].innerHTML += "<li>cosa 3 añadida</li>";

let number = 1;
number += 1;
console.log(number);
