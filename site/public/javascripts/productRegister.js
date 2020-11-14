function addIsInvalid(element){
    element.classList.add('is-invalid')
}

function addIsValid(element){
    element.classList.add('is-valid')
}

window.addEventListener('load', function(){
    let formulario = document.getElementById('formProducto')
    let inputImagen = document.getElementById('imagenProducto')
    let inputMarca = document.getElementById('marca')
    let inputDescripcion = document.getElementById('descripcion')
    let inputNombre = document.getElementById('nombre')
    let inputPrecio = document.getElementById('precio')
    let inputDescuento = document.getElementById('descuento')
    
    console.log(formulario)
    let regExSignos = /[+-]/
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    
    inputMarca.addEventListener('keyup', function(){
        switch(true){
            case this.value.trim().length == 0:
                errorMarca.innerHTML = 'Este campo no puede quedar vacío'
                addIsInvalid(inputMarca)
            break
            case this.value.trim().length < 2:
                errorMarca.innerHTML = 'El nombre de la marca debe tener al menos 2 carácteres'
                inputMarca.classList.toggle('is-invalid')
            break 
            default:
                errorMarca.innerHTML = ''
                inputMarca.classList.remove('is-invalid')
                addIsValid(inputMarca)
            break
        }
    })

    inputDescripcion.addEventListener('keyup', function(){
        switch(true){
            case this.value.trim().length == 0: 
                errorDescripcion.innerHTML = 'Este campo no puede quedar vacío'
                addIsInvalid(inputDescripcion)
            break
            case this.value.trim().length < 20:
                errorDescripcion.innerHTML = 'La descripción debe tener al menos 20 carácteres'
                addIsInvalid(inputDescripcion)
            break
            default:
                errorDescripcion.innerHTML = ''
                inputDescripcion.classList.remove('is-invalid')
                addIsValid(inputDescripcion)
            break
        }
    })

    inputNombre.addEventListener('keyup', function(){
        switch(true){
            case this.value.trim().length == 0:
                errorNombre.innerHTML = 'Este campo no puede quedar vacío'
                addIsInvalid(errorNombre)
            break
            case this.value.trim().length < 4:
                errorNombre.innerHTML = 'El nombre del producto debe tener al menos 4 carácteres'
                addIsInvalid(errorNombre)
            break
            default:
                inputNombre.classList.remove('is-invalid')
                errorNombre.innerHTML = ''
                addIsValid(inputNombre)
            break
        }
    })

    inputPrecio.addEventListener('keyup', function(){
        switch(true){
            case this.value < 1: 
                errorPrecio.innerHTML = 'El precio del producto debe ser mayor a $1'
                addIsInvalid(inputPrecio)
            break
            
            default:
                inputPrecio.classList.remove('is-invalid')
                errorPrecio.innerHTML = ''
                addIsValid(inputPrecio)
            break
        }

    })

    inputDescuento.addEventListener('keyup', function(){
        switch(true){
            case this.value < 0: 
                errorDescuento.innerHTML = 'El descuento no puede ser negativo'
                addIsInvalid(inputDescuento)
            break

            case this.value.trim().length == 0:
                errorDescuento.innerHTML = 'Este campo no puede quedar vacío, en caso de no tener descuento colocar un 0'
                addIsInvalid(inputDescuento)
            break
            default:
                errorDescuento.innerHTML = ''
                inputDescuento.classList.remove('is-invalid')
                addIsValid(inputDescuento)
            break

            
        }
    })

    inputImagen.addEventListener('change', function(e){
        switch(true){
        case !regExExtensions.exec(this.value):
            errorImagen.innerHTML = 'La extensión de la imagen sólo puedo ser jpg/jpeg/png/gif'
            addIsInvalid(inputImagen)
            this.value = ''
            preview.src=''
        break

        default:
            this.classList.remove('is-invalid')
            addIsValid(inputImagen)
            errorImagen.innerHTML=''
            let reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onload = function(){
                preview.src = reader.result
            }
        }
    })

    formulario.addEventListener('submit',function(e){
        e.preventDefault()

        let elementos = this.elements
        let error = false

        for(let i = 0; i<formulario.length - 1; i++){
            if(elementos[i].value == 0){
                addIsInvalid(elementos[i])
                error = true
            }
        }

        if(!error){
            formulario.submit()
        }else{
            msgError.innerHTML = 'Los campos señalados son obligatorios'
        }
    })
})