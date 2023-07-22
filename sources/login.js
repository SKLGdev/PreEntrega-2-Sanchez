//Pregunta para confirmar si quiere loguearse
let pregunta1 = confirm("¿Desea Loguearse a Helados Kosten?");

if (pregunta1 == true) {
  const usuariosRegistrados = [];

  function login() {
    let email = prompt("Ingrese su email");
    let nombreUsuario = prompt("Ingrese su nombre de usuario");
    let contrasenia = prompt("Ingrese su contraseña");

    //Buscar el usuario en la base de datos
    const usuarioEncontrado = usuariosRegistrados.find(
      (user) =>
        user.email === email &&
        user.nombreUsuario === nombreUsuario &&
        user.contrasenia === contrasenia
    );

    if (usuarioEncontrado) {
      alert("¡Inicio de sesión exitoso!");
    } else {
      //Algo esta funcionando mal. REVISAR PARA MAS ADELANTE
      
      
      //alert("Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.");

      /*if (usuarioEncontrado != usuariosRegistrados) {
        email = prompt("Ingrese su email");
        nombreUsuario = prompt("Ingrese su nombre de usuario");
        contrasenia = prompt("Ingrese su contraseña");
      }*/
    }
  }
  login();
}

/*

*/

//Debo terminar la suscripcion para que pueda comprar con beneficio del 20% de descuento.

























































//ESTO ES DE ANTES PERO PUEDE SERVIR ===================== REVISARRRRRRR





/*function ingreseDatos() {
  let nombreUsuario = prompt("Señor usuario, ingrese Luis.");
  if (nombreUsuario == "Luis" || nombreUsuario == "luis") {
    alert("El nombre ingresado es correcto.");
  } else {
    do {
      prompt(
        "Señor usuario por favor vuelva a ingresar los datos porque son incorrectos"
      );
    } while (nombreUsuario == false);
  }
  let apellidoUsuario = prompt("Señor usuario, ingrese su Kosten.");
  if (apellidoUsuario == "Kosten" || apellidoUsuario == "kosten") {
    alert("El apellido ingresado es correcto.");
  } else {
    //vuelva a ingresar los datos, esto es con un bucle si es posible.
  }
  let emailUsuario = prompt("Señor usuario, ingrese su luis.kosten@gmail.com.");
  if (emailUsuario == "luis.kosten@gmail.com") {
    alert("El E-mail ingresado es correcto.");
  } else {
    //vuelva a ingresar los datos, esto es con un bucle si es posible.
  }
  let contraseñaUsuario = prompt("Señor usuario, ingrese su 1234.1234.");
  if (contraseñaUsuario == "1234.1234") {
    alert("El E-mail ingresado es correcto.");
  } else {
    //vuelva a ingresar los datos, esto es con un bucle si es posible.
  }
}*/

//ingreseDatos();

// function ingreseDatos() {
// //Función general.
//   function nombre() {
//     //Función particular.
//     let nombreUsuario = prompt("Señor usuario, ingrese Luis.");
//     if (nombreUsuario == "Luis" || nombreUsuario == "luis") {
//       alert("El nombre ingresado es correcto.");
//     } else {
//       do {
//         alert("El nombre ingresado es incorrecto.")
//         nombre();
//       } while (nombreUsuario == false);
//     }
//   }
//   nombre();
//   function apellido() {
//     let apellidoUsuario = prompt("Señor usuario, ingrese su Kosten.");
//     if (apellidoUsuario == "Kosten" || apellidoUsuario == "kosten") {
//       alert("El apellido ingresado es correcto.");
//     } else {
//       //vuelva a ingresar los datos, esto es con un bucle si es posible.
//     }
//   }
//   apellido();
//   function email() {
//     let emailUsuario = prompt(
//       "Señor usuario, ingrese su luis.kosten@gmail.com."
//     );
//     if (emailUsuario == "luis.kosten@gmail.com") {
//       alert("El E-mail ingresado es correcto.");
//     } else {
//       //vuelva a ingresar los datos, esto es con un bucle si es posible.
//     }
//   }
//   email();
//   function contraseña() {
//     let contraseñaUsuario = prompt("Señor usuario, ingrese su 1234.1234.");
//     if (contraseñaUsuario == "1234.1234") {
//       alert("El E-mail ingresado es correcto.");
//     } else {
//       //vuelva a ingresar los datos, esto es con un bucle si es posible.
//     }
//   }
//   contraseña();
// }

// ingreseDatos();
