// ==========================================
// 1. EVENTO 'click' y getElementById()
// ==========================================
// document.getElementById() es la forma más rápida de seleccionar un elemento por su ID.
const botonClick = document.getElementById("btn-click");
const resultadoClick = document.getElementById("resultado-click");

// addEventListener() nos permite "escuchar" un evento en el elemento seleccionado.
// Aquí escuchamos el evento 'click'.
botonClick.addEventListener("click", function () {
  resultadoClick.textContent = "¡El texto fue cambiado usando JavaScript!";
  resultadoClick.style.color = "green"; // También podemos cambiar estilos
});

// ==========================================
// 2. EVENTO 'input' y querySelector()
// ==========================================
// document.querySelector() selecciona el primer elemento que coincida con el selector CSS (ej. # para ID, . para clase)
const inputTexto = document.querySelector("#input-texto");
const resultadoInput = document.querySelector("#resultado-input");

// El evento 'input' se ejecuta CADA VEZ que el valor del campo cambia (cada vez que tecleas o borras).
inputTexto.addEventListener("input", function (evento) {
  // evento.target.value contiene el texto exacto que tiene el input en ese momento.
  resultadoInput.textContent = `Estás escribiendo: ${evento.target.value}`;
});

// ==========================================
// 3. EVENTO 'change'
// ==========================================
const selectOpciones = document.getElementById("select-opciones");
const resultadoChange = document.getElementById("resultado-change");

// El evento 'change' se dispara cuando el valor cambia Y se confirma (por ejemplo, al seleccionar una opción del <select> o al salir de un input).
selectOpciones.addEventListener("change", function (evento) {
  if (evento.target.value !== "") {
    resultadoChange.textContent = `Seleccionaste: ${evento.target.value}`;
  } else {
    resultadoChange.textContent = "";
  }
});

// ==========================================
// 4. EVENTO 'submit'
// ==========================================
const formulario = document.getElementById("mi-formulario");
const nombreForm = document.getElementById("nombre-form");
const resultadoSubmit = document.getElementById("resultado-submit");

// El evento 'submit' se escucha siempre en la etiqueta <form>, NO en el botón de enviar.
formulario.addEventListener("submit", function (evento) {
  // MUY IMPORTANTE: preventDefault() detiene el comportamiento por defecto del formulario.
  // En este caso, evita que la página se recargue automáticamente.
  evento.preventDefault();

  // Obtenemos el valor que el usuario escribió
  const nombre = nombreForm.value;

  // Mostramos el resultado
  resultadoSubmit.textContent = `¡Formulario enviado correctamente! Hola, ${nombre}.`;
  resultadoSubmit.style.color = "#8e44ad"; // Color morado

  // Opcional: limpiar el formulario después de enviarlo
  formulario.reset();
});

// ==========================================
// 5. EVENTOS 'mouseover' y 'mouseout' (Ratón)
// ==========================================
const cajaHover = document.getElementById("caja-hover");
const resultadoHover = document.getElementById("resultado-hover");

// 'mouseover' detecta cuando el puntero ENTRA al elemento
cajaHover.addEventListener("mouseover", function () {
  cajaHover.style.backgroundColor = "#b8daff"; // Cambiamos el color de fondo a azul claro
  cajaHover.style.borderColor = "#0056b3";
  resultadoHover.textContent = "¡El ratón está adentro!";
  resultadoHover.style.color = "#0056b3";
});

// 'mouseout' detecta cuando el puntero SALE del elemento
cajaHover.addEventListener("mouseout", function () {
  cajaHover.style.backgroundColor = "#e9ecef"; // Regresamos al color original
  cajaHover.style.borderColor = "#ccc";
  resultadoHover.textContent = "El ratón salió.";
  resultadoHover.style.color = "gray";
});

// ==========================================
// 6. EVENTOS DE TECLADO ('keydown' y 'keyup')
// ==========================================
const inputTeclado = document.getElementById("input-teclado");
const resultadoTeclado = document.getElementById("resultado-teclado");

// 'keydown' ocurre justo en el momento en que hundes la tecla
inputTeclado.addEventListener("keydown", function (evento) {
  // evento.key nos dice exactamente qué tecla se presionó (ej. 'a', 'Enter', 'Shift')
  resultadoTeclado.textContent = `Manteniendo presionada la tecla: [ ${evento.key} ]`;
  resultadoTeclado.style.color = "red";
});

// 'keyup' ocurre cuando sueltas la tecla
inputTeclado.addEventListener("keyup", function (evento) {
  resultadoTeclado.textContent = `Soltaste la tecla: [ ${evento.key} ]`;
  resultadoTeclado.style.color = "green";
});

// ==========================================
// 7. EVENTOS 'focus' y 'blur'
// ==========================================
const inputFocus = document.getElementById("input-focus");
const resultadoFocus = document.getElementById("resultado-focus");

// 'focus' es cuando el elemento recibe la atención del usuario (para interactuar/escribir)
inputFocus.addEventListener("focus", function () {
  inputFocus.style.border = "2px solid #28a745"; // Borde verde
  inputFocus.style.outline = "none"; // Quitamos el borde por defecto del navegador
  resultadoFocus.textContent =
    "El campo está activo (Focus). ¡Puedes escribir!";
  resultadoFocus.style.color = "#28a745";
});

// 'blur' es cuando el elemento pierde la atención (por ejemplo, haces clic en otra parte de la pantalla)
inputFocus.addEventListener("blur", function () {
  inputFocus.style.border = "1px solid #ccc"; // Regresamos al borde normal
  resultadoFocus.textContent = "Saliste del campo (Blur). Perdió la atención.";
  resultadoFocus.style.color = "#6c757d"; // Color gris
});
