window.addEventListener('load',()=>{
    let eliminarProducto = document.getElementById('deleteProduct')
    

      eliminarProducto.addEventListener('click',function(e){
      let conf = confirm('¿Estás seguro que deseas eliminar este producto?')
      if(!conf){
          e.preventDefault()
          Swal.fire({
              icon: 'info',
              title: 'No se ha eliminado el producto',
              text: 'Este producto seguirá exhibiéndose',
              timer: 5000
          })
      }
      else{
          Swal.fire({
            icon: 'success',
            title: 'Se ha eliminado el producto',
            text: 'Este producto se ha eliminado correctamente',
            timer:5000
          })
      }
    })

    })
