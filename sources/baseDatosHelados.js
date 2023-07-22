//OBJETO para los helados
class Helado {
  constructor(id, categoria, nombre, descripcion, precio) {
    this.id = id;
    this.categoria = categoria;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = parseFloat(precio);
  }
  verCategoriaHelados() {
    return // Debo crear una funcionalidad específica para ver las distintas categosias pero antes debo separar las categorias de los helados
           // Con distintos nombres para los arrays.
  }
  //Este es utilizado en el menu de logicaBaseDatosHelados
  verDescripcionCompleta() {
    return (
      "#" +
      this.id +
      "--" +
      this.categoria +
      "\n" +
      this.nombre +
      "\n" +
      this.descripcion +
      "\n" +
      "$" +
      this.precio
    );
  }
  //Este es utilizado en el menu de logicaBaseDatosHelados
  verPrecioHelados() {
    return this.nombre + "\n" + "$" + this.precio;
  }
}

//ARRAY de la primer categoria de los helados de CHOCOLATE
let arrayHelados = new Array();
arrayHelados.push(new Helado(1, "CHOCOLATE", "Chocolate", "descripcion", 1200));
arrayHelados.push(
  new Helado(2, "CHOCOLATE", "Chocolate con almendras", "descripcion", 1140)
);
arrayHelados.push(
  new Helado(3, "CHOCOLATE", "Chocolate suizo", "descripcion", 1500)
);
arrayHelados.push(
  new Helado(4, "CHOCOLATE", "Chocolate italiano", "descripcion", 1280)
);
arrayHelados.push(
  new Helado(5, "CHOCOLATE", "Chocolate Marroc", "descripcion", 1300)
);
arrayHelados.push(
  new Helado(6, "CHOCOLATE", "Chocolate Rocher", "descripcion", 1800)
);
arrayHelados.push(
  new Helado(7, "CHOCOLATE", "Chocolate blanco", "descripcion", 1000)
);
arrayHelados.push(
  new Helado(8, "CHOCOLATE", "Mouse de chocolate", "descripcion", 1620)
);
arrayHelados.push(
  new Helado(9, "CHOCOLATE", "Chocolate blanco", "descripcion", 1100)
);

//ARRAY de la segunda categoria de los helados de DULCE DE LECHE
arrayHelados.push(
  new Helado(10, "DULCE DE LECHE", "Dulce de leche", "descripcion", 1200)
);
arrayHelados.push(
  new Helado(11, "DULCE DE LECHE", "Súper dulce de leche", "descripcion", 1140)
);
arrayHelados.push(
  new Helado(
    12,
    "DULCE DE LECHE",
    "Dulce de leche granizado",
    "descripcion",
    1500
  )
);
arrayHelados.push(
  new Helado(
    13,
    "DULCE DE LECHE",
    "Dulce de leche con nuez",
    "descripcion",
    1280
  )
);
arrayHelados.push(
  new Helado(14, "DULCE DE LECHE", "Dulce de leche Bombón", "descripcion", 1300)
);
arrayHelados.push(
  new Helado(
    15,
    "DULCE DE LECHE",
    "Bombón de chocolate con dulce de leche",
    "descripcion",
    1800
  )
);
arrayHelados.push(
  new Helado(
    16,
    "DULCE DE LECHE",
    "Suspiro de Dulce de leche",
    "descripcion",
    1000
  )
);
arrayHelados.push(
  new Helado(
    17,
    "DULCE DE LECHE",
    "Chocolinas con Dulce de leche natural y Queso Crema",
    "descripcion",
    1620
  )
);

//ARRAY de la tercera categoria de los helados de CREMA
arrayHelados.push(new Helado(18, "CREMA", "Crema Oreo", "descripcion", 1200));
arrayHelados.push(
  new Helado(19, "CREMA", "Crema de vainilla", "descripcion", 1140)
);
arrayHelados.push(
  new Helado(20, "CREMA", "Vainilla Vegana", "descripcion", 1500)
);
arrayHelados.push(
  new Helado(21, "CREMA", "Crema americana", "descripcion", 1280)
);
arrayHelados.push(
  new Helado(22, "CREMA", "Crema de almendras", "descripcion", 1300)
);
arrayHelados.push(
  new Helado(23, "CREMA", "Chantilly con frutillas", "descripcion", 1800)
);
arrayHelados.push(new Helado(24, "CREMA", "Granizado", "descripcion", 1000));
arrayHelados.push(
  new Helado(25, "CREMA", "Menta granizada", "descripcion", 1620)
);
arrayHelados.push(new Helado(26, "CREMA", "Tramontana", "descripcion", 1620));
arrayHelados.push(new Helado(27, "CREMA", "Pistacho", "descripcion", 1620));
arrayHelados.push(new Helado(28, "CREMA", "Tiramisú", "descripcion", 1620));
arrayHelados.push(
  new Helado(
    29,
    "CREMA",
    "Mascarpone con frutos del bosque",
    "descripcion",
    1620
  )
);

//ARRAY de la cuarta categoria de los helados FRUTALES
arrayHelados.push(
  new Helado(30, "FRUTALES", "Frutilla a la crema", "descripcion", 1200)
);
arrayHelados.push(
  new Helado(31, "FRUTALES", "Frutilla al agua", "descripcion", 1140)
);
arrayHelados.push(new Helado(32, "FRUTALES", "Frambuesa", "descripcion", 1500));
arrayHelados.push(
  new Helado(33, "FRUTALES", "Frutos rojos", "descripcion", 1280)
);
arrayHelados.push(
  new Helado(34, "FRUTALES", "Banana split", "descripcion", 1300)
);
arrayHelados.push(
  new Helado(35, "FRUTALES", "Coco con dulce de leche", "descripcion", 1800)
);
arrayHelados.push(
  new Helado(36, "FRUTALES", "Limón al agua", "descripcion", 1000)
);
arrayHelados.push(
  new Helado(37, "FRUTALES", "Mousse de limón", "descripcion", 1620)
);
arrayHelados.push(new Helado(38, "FRUTALES", "Lemon pie", "descripcion", 1620));
arrayHelados.push(
  new Helado(
    39,
    "FRUTALES",
    "Limonada con menta y jengibre",
    "descripcion",
    1620
  )
);
arrayHelados.push(new Helado(40, "FRUTALES", "Maracuyá", "descripcion", 1620));
arrayHelados.push(new Helado(41, "FRUTALES", "Caribe", "descripcion", 1620));
