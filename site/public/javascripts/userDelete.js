window.addEventListener('load',()=>{
    console.log('Evento registrado')
    let botonBaja = document.getElementById('darBaja')

    botonBaja.addEventListener('click',function(e){
      let conf = confirm('¿Estás seguro que deseas dar de baja la cuenta?')
      if(!conf){
          e.preventDefault()
          Swal.fire({
              icon:'info',
              title: 'Gracias por quedarte',
              text: 'Seguí disfrutando de nuestras ofertas',
              timer:2000
          })
      }
      else{
            Swal.fire({
            icon: 'success',
            title: 'Se ha dado de baja tu cuenta',
            text: 'Te vamos a extrañar :(',
            timer:2000
            })
        }
    })

    })
