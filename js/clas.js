let introduccion = alert('Bienvenido a la tienda. Hay descuento del 20% pagando con Debito')

class Producto {
  constructor(id, precio, categoria) {
    this.precio = precio;
    this.id = id;
    this.categoria = categoria;
    
    this.mostrar = function(){
      alert ('El precio de ' + this.id + ' es de $' + this.precio);
    }
  }
}
const remera1 = new Producto ("remera", 10000, "camisetas")
const pantalon1 = new Producto ("pantalon", 15000, "pantalones")
const campera1 = new Producto ("campera", 20000, "abrigos")

const Items = [remera1, pantalon1, campera1]

alert('La lista de productos es la siguiente')

let recorrido = Items.map((producto) => producto.id + ' ' + producto.precio);
let recorridoStr = recorrido.join('\n');
alert(recorridoStr);

let indumentaria = prompt('Seleccionar que prenda desea comprar: remera, pantalon o campera')
let productoElegido;

 if(indumentaria == 'remera'){
  productoElegido = remera1;
}else if (indumentaria == 'pantalon'){
  productoElegido = pantalon1;
}else if (indumentaria == 'campera'){
  productoElegido = campera1;
}else{
  alert('Por favor, seleccione un item')
}

let metodoDePago = prompt('Elegir un metodo de pago : Debito o Credito')

function calcularPrecioFinal(precio, metodoDePago) {
  if (metodoDePago === 'Debito' || metodoDePago === 'debito') {
    return precio * 0.8; // descuento del 20% si es débito
  } else if(metodoDePago === 'Credito'|| metodoDePago === 'credito'){
    return precio; // el precio en caso de crédito
  }
}

let precioFinal = calcularPrecioFinal(productoElegido.precio, metodoDePago);

alert("El precio final es de $" + precioFinal)
