  var form = document.getElementById("consultaForm");
  var nombreInput = document.getElementById("name");
  var apellidoInput = document.getElementById("lastname");
  var emailInput = document.getElementById("email");
  var asuntoInput = document.getElementById("matter");
  var mensajeInput = document.getElementById("message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = nombreInput.value;
    var apellido = apellidoInput.value;
    var email = emailInput.value;
    var asunto = asuntoInput.value;
    var mensaje = mensajeInput.value;

    if (nombre.length <20) {
      if (apellido.length <40){
        if (asunto === asunto.toUpperCase()) {
          if (mensaje.length<300) {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailRegex.test(email)) {
            alert("Registro sin observaciones");
            form.reset();
            }else {
            alert("El email no tiene formato ___@__.__");
            }
          }else{
            alert("El mensaje debe ser menos de 300 caracteres")
          }
          }else {
          alert("El asunto debe estar en mayusculas");
          }
        }else{
        alert("El apellido debe tener menos de 40 caracteres")
        }
    } else {
      alert("El nombre debe tener menos de 20 caracteres");
    }
  })