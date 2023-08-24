
//creación de los productos//

const indumentarias = [
  {
    id: "Remera 01",
    nombre: "T-shirt Black",
    img: "../img/remeras/01.jpg",
    precio : 10000,
    categoria :{
      nombre : "remeras",
      id: "remeras"
    }
  },
  {
    id: "Remera 02",
    nombre: "T-shirt White",
    img: "../img/remeras/02.png",
    precio : 10000,
    categoria :{
      nombre : "remeras",
      id: "remeras"
    }
  },
  {
    id: "Remera 03",
    nombre: "T-shirt Rainbow Black",
    img: "../img/remeras/03.jpg",
    precio : 10000,
    categoria :{
      nombre : "remeras",
      id: "remeras"
    }
  },
  {
    id: "Remera 04",
    nombre: "T-shirt Rainbow White",
    img: "../img/remeras/04.jpg",
    precio : 10000,
    categoria :{
      nombre : "remeras",
      id: "remeras"
    }
  },
  {
    id: "Pantalon 01",
    nombre: "Jean Black",
    img: "../img/pantalones/01.png",
    precio : 15000,
    categoria :{
      nombre : "pantalones",
      id: "pantalones"
    }
  },
  {
    id: "Pantalon 02",
    nombre: "Pants Black",
    img: "../img/pantalones/02.png",
    precio : 15000,
    categoria :{
      nombre : "pantalones",
      id: "pantalones"
    }
  },
  {
    id: "Pantalon 03",
    nombre: "Pants Grey",
    img: "../img/pantalones/03.jpg",
    precio : 15000,
    categoria :{
      nombre : "pantalones",
      id: "pantalones"
    }
  },
  {
    id: "Pantalon 04",
    nombre: "Pants Orange",
    img: "../img/pantalones/04.jpg",
    precio : 15000,
    categoria :{
      nombre : "pantalones",
      id: "pantalones"
    }
  },
  {
    id: "Abrigo 01",
    nombre: "Black Jacket",
    img: "../img/abrigos/01.jpg",
    precio : 20000,
    categoria :{
      nombre : "abrigos",
      id: "abrigos"
    }
  },
  {
    id: "Abrigo 02",
    nombre: "Hoodie Brown",
    img: "../img/abrigos/02.png",
    precio : 20000,
    categoria :{
      nombre : "abrigos",
      id: "abrigos"
    }
  },
  {
    id: "Abrigo 03",
    nombre: "Hoodie Black",
    img: "../img/abrigos/03.png",
    precio : 20000,
    categoria :{
      nombre : "abrigos",
      id: "abrigos"
    }
  },
  {
    id: "Abrigo 04",
    nombre: "Hoodie Cream",
    img: "../img/abrigos/04.png",
    precio : 20000,
    categoria :{
      nombre : "abrigos",
      id: "abrigos"
    }
  },
]

//cargando los productos haciendo uso del dom//

let contenedorIndumentaria = document.querySelector(".indumentaria-contenedor");

function cargarIndumentaria(indumentarias){

  indumentarias.forEach(indumentaria => {

    let div = document.createElement("div");
    div.classList.add("indumentaria");
    div.innerHTML = `
    <div class="indumentaria">
      <img class="indumentaria-imagen" src="${indumentaria.img}" alt="${indumentaria.id}">
      <div class="indumentaria-detalles">
        <h2 class="indumentaria-nombre">${indumentaria.nombre}</h2>
        <p class="indumentaria-precio">$ ${indumentaria.precio}</p>
        <button class="indumentaria-agregar" id="${indumentaria.id}">Añadir</button>
      </div>
    </div>
    `
    contenedorIndumentaria.append(div);
  })
}

cargarIndumentaria(indumentarias);

//filtrado por categoria de ropa //


const filtroCategoria = document.querySelectorAll(".boton-filtrado");

filtroCategoria.forEach(filtrado =>{

  filtrado.addEventListener("click", (e) =>{

    const categoriaSeleccionada = e.currentTarget.getAttribute("data-categoria");

    const filtradoSeleccionado = indumentarias.filter(indumentaria => indumentaria.categoria.nombre === categoriaSeleccionada);

    contenedorIndumentaria.innerHTML = "";

    cargarIndumentaria(filtradoSeleccionado);
  })
})

//uso de eventos y local storage//

const indumentariaAgregar= document.querySelectorAll(".indumentaria-agregar")

indumentariaAgregar.forEach(elemento => {
  elemento.addEventListener("click", agregaCarrito);
});

const indumentariaCarrito = [];

function agregaCarrito(e) {
  const id = e.currentTarget.id;
  const indumentariaSeleccionada = indumentarias.find(indumentaria => indumentaria.id == id);


  const elementoEnCarrito = indumentariaCarrito.find(item => item.id === id);

  if (elementoEnCarrito) {
    elementoEnCarrito.suma++;
  } else {
    indumentariaSeleccionada.suma = 1;
    indumentariaCarrito.push(indumentariaSeleccionada);
  }

  localStorage.setItem("indumentariaSeleccionada", JSON.stringify(indumentariaCarrito));
  Swal.fire({
    title: 'Agregado!',
    text: 'Producto al carrito 😉',
    icon: 'success',
    confirmButtonText: 'Ok'
  })

}



