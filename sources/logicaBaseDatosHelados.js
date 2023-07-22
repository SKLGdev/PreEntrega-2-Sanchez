//Bienvenida
alert("Bienvenido a Helados Kosten");

//Funcion del menu del sitio
function Menu() {
  let v = true;
  while (v) {
    let mensaje = "Indique lo que desea hacer: ";
    mensaje += "\n1) Ver La descripción de los helados ";
    mensaje += "\n2) Comprar helados ";
    mensaje += "\n3) Salir ";

    let resp = prompt(mensaje);

    switch (resp) {
      case "1":
        verStockHelados();
        break;
      case "2":
        comprarHelados();
        break;
      case "3":
        alert("Gracias por utilizar nuestra pagina");
        v = false;
        break;
      case null:
        alert("Gracias por utilizar nuestra pagina");
        v = false;
        break;
      default:
        alert("No ingreso una opcion valida");
    }
  }
}
Menu();

//Funcion de ver Los distintos tipos de helados.
function verStockHelados() {
  let mensaje = "Los helados que tenemos son:";

  arrayHelados.forEach((helado) => {
    mensaje += "\n " + helado.verDescripcionCompleta();
  });

  alert(mensaje);
}

//Debo crear una funcion para sumar los valores de los helados y acumularlos hasta que el usuario ingrese x para terminar la operacion.


//Funcion para ver la categoria de los helados y demas
/*function comprarHelados() {
  let mensaje = prompt(
    "Elija la categoria de helados escribiendo su nombre" +
      "\n" +
      "CHOCOLATE" +
      "\n" +
      "DULCE DE LECHE" +
      "\n" +
      "CREMA" +
      "\n" +
      "FRUTALES"
  );
}*/

//Debo crear algo para que el usuario vea los datos almacenados y pueda o no aplicarles un decuento del 20% a la totalidad de la compra.
