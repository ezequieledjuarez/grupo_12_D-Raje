window.addEventListener('load',()=>{

    let botonBaja = document.getElementById('darBaja')

    botonBaja.addEventListener('click',function(e){
      let conf = confirm('¿Estás seguro que deseas dar de baja la cuenta?')
      if(!conf){
          e.preventDefault()
          Swal.fire({
              icon:'info',
              title: 'Gracias por quedarte',
              text: 'Seguí disfrutando de nuestras ofertas'
          })
      }
      else{
            Swal.fire({
            icon: 'success',
            title: 'Se ha dado de baja tu cuenta',
            text: 'Te vamos a extrañar :('
            })
        }
    })

    })
