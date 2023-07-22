//Saludo
alert("Bienbenido a nustro sitio web de venta de helados");
//Pregunta para confirmar si quiere registrarse
let pregunta = confirm("¿Desea Registrarse a Helados Kosten?");

if (pregunta) {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let nombreUsuario = prompt("Ingrese su nombre de usuario");
  let email = prompt("Ingrese su email");
  let contrasenia = prompt("Ingrese su contraseña");

  if (
    validacionDatos(nombre) &&
    validacionDatos(apellido) &&
    validacionDatos(nombreUsuario) &&
    validacionDatos(email) &&
    validacionDatos(contrasenia)
  ) {
    let nuevoUsuario = {
      nombre: nombre,
      apellido: apellido,
      nombreUsuario: nombreUsuario,
      email: email,
      contrasenia: contrasenia,
    };

    //Almacena el nuevoUsuario en el objeto usuariosRegistrados
    usuariosRegistrados[nombreUsuario] = nuevoUsuario;

    let respuesta = crearConfirmacion(nuevoUsuario);

    if (respuesta) {
      alert("Gracias por haberte registrado a Helados Kosten ");
    } else {
      let campo = prompt("¿Qué campo queres actualizar?");

      if (campo) {
        if (actualizarCampo(campo, nuevoUsuario)) {
          let respuesta = crearConfirmacion(nuevoUsuario);

          if ((respuesta = crearConfirmacion(nuevoUsuario))) {
            alert("Gracias por haberte registrado a Helados Kosten ");
          } else {
            alert("No se pudo completar la registración");
          }
        }
      }
    }
  } else {
    alert("Desbes ingresar los datos en los campos requeridos");
  }
}

//Validacion de los datos ingresados por el usuario
function validacionDatos(campo) {
  if (!campo) {
    return false;
  }
  if (campo == "") {
    return false;
  }
  return true;
}

//Confirmacion de los datos
function crearConfirmacion(usuario) {
  let mensaje = "";
  msj = mensaje + " ¿Confirma que los siguientes datos son correctos? ";
  msj = mensaje + "\n  nombre: " + usuario.nombre;
  msj = mensaje + "\n  apellido: " + usuario.apellido;
  msj = mensaje + "\n  email: " + usuario.email;

  let respuesta = confirm(mensaje);

  return respuesta;
}

//Actualizacion de los datos
function actualizarCampo(campo, user) {
  switch (campo) {
    case "nombre":
      let nombre = prompt("Ingrese su nombre");
      user.nombre = nombre;
      break;

    case "apellido":
      let apellido = prompt("Ingrese su apellido");
      user.apellido = apellido;
      break;

    case "usuario":
      let usuario = prompt("Ingrese su usuario");
      user.usuario = usuario;
      break;

    case "email":
      let email = prompt("Ingrese su email");
      user.email = email;
      break;

    default:
      alert("No fue posible actualizar");
      return false;
  }

  return true;
}
