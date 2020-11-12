window.addEventListener('load',()=>{
    let eliminarProducto = document.getElementById('deleteProduct')
    console.log(eliminarProducto)

      eliminarProducto.addEventListener('click',function(e){
      let conf = confirm('¿Estás seguro que deseas dar de baja la cuenta?')
      if(!conf){
          e.preventDefault()
          Swal.fire({
              icon: 'error',
              title: 'No se ha eliminado el producto',
              text: 'Este producto seguirá existiendo'
          })
      }
      else{
          Swal.fire({
            icon: 'success',
            title: 'Se ha eliminado el producto',
            text: 'Este producto se ha eliminado correctamente'
          })
      }
    })

    })
