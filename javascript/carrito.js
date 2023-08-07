function obtenerLocalStorage(){

    const indumentariaJSON = JSON.parse(localStorage.getItem("indumentariaSeleccionada"))
    console.log(indumentariaJSON)
  }

obtenerLocalStorage()