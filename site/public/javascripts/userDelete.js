window.addEventListener('load',()=>{

    let botonBaja = document.getElementById('darBaja')

    botonBaja.addEventListener('click',function(e){
      let conf = confirm('¿Estás seguro que deseas dar de baja la cuenta?')
      if(!conf){
          e.preventDefault()
          Swal.fire({
              background:'#0f4c75',
              title: 'Gracias por quedarte',
              text: 'Seguí disfrutando de nuestras ofertas'
          })
      }
    })

    })
