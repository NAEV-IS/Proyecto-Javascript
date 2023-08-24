const form =document.querySelector(".formulario")
const formSpree = "https//formspree.io/forms/mqkvqkwn"

form.addEventListener("submit", enviar)

async function enviar(e){
    e.preventDefault()

    const formData = new FormData(form);
    try {
        const response = await fetch(this.action, {
          method: "POST", 
          body: formData,  //se envia el objeto FormData
          headers: {
            Accept: "application/json",
          },
        });
    
        if (response.ok) {
            Swal.fire({
                text: 'Hubo un error al enviar su formulario',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
          form.reset(); 
        } else {
            Swal.fire({
                text: 'Hubo un error al enviar su formulario',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Hubo un problema al enviar el formulario.");
      }
    }
