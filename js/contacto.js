let formulario = document.getElementById("contacto");
formulario.addEventListener("submit", validarFormulario);

async function validarFormulario(e){
    e.preventDefault();
    // const form = new FormData(this);
    // const respuesta = await fetch(this.action, {
    //     method: this.method,
    //     body: form,
    //     headers: {
    //         "Accept": "application/json"
    //     }
    // })
    // if(respuesta.ok) {
    //     this.reset()
    //     Toastify({
    //         text: "¡Mensaje enviado! Nos contactaremos lo mas pronto posible",
    //         duration: 3000,
    //         position: 'center',
    //         className: "toastPersonalizado",
    //         style: {
    //             background: "#F2FF8D",
    //         }
    //         }).showToast();
    // }
}

(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()