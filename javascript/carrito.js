const indumentariaJSON = JSON.parse(localStorage.getItem("indumentariaSeleccionada"))
    console.log(indumentariaJSON);
  
const carritoIndumentarias = document.querySelector(".carrito-indumentarias");
const carritoAccionComprar = document.querySelector(".carrito-accion-comprar");


indumentariaJSON.forEach(indumentaria => {
  const div = document.createElement("div");
  div.classList.add("carrito-indumentaria");
  div.innerHTML = `
    <img class="carrito-indumentaria-img" src="${indumentaria.img}" alt="">
    <div class="carrito-indumentaria-nombre">
        <small>${indumentaria.id}</small>
        <h3>${indumentaria.nombre}</h3>
    </div>
    <div class="carrito-indumentaria-precio">
        <small>Precio</small>
        <p>$${indumentaria.precio}</p>
    </div>
  `;
  carritoIndumentarias.append(div);
});

carritoAccionComprar.addEventListener("click", comprar);

function comprar(){
  Swal.fire({
    text: 'Gracias por su compra😉',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
}