  var form = document.getElementById("registroForm");
  var nombreInput = document.getElementById("name");
  var apellidoInput = document.getElementById("lastname");
  var edadInput = document.getElementById("age");
  var emailInput = document.getElementById("email");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = nombreInput.value;
    var apellido = apellidoInput.value;
    var edad = parseInt(edadInput.value);
    var email = emailInput.value;

    if (nombre === nombre.toUpperCase() && apellido === apellido.toUpperCase()) {
      if (edad > 18) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
          alert("Registro sin observaciones");
          form.reset();
        } else {
          alert("El email no tiene formato ___@__.__");
        }
      } else {
        alert("Usted debe ser mayor de 18");
      }
    } else {
      alert("El nombre y el apellido deben estar en mayúsculas");
    }
  })