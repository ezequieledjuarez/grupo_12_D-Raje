function addIsInvalid(element){
    element.classList.add('is-invalid')
}

function addIsValid(element){
    element.classList.add('is-valid')
}
let regExCorreo =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

          
window.addEventListener('load', ()=>{
    
    let formulario = document.getElementById('registerForm')

    let inputCorreo = document.getElementById('correo')
    let inputPass = document.getElementById('pass1')
    let inputPass2 = document.getElementById('pass2')
    let inputNombre = document.getElementById('nombre')
    let inputApellido = document.getElementById('apellido')
    let inputImagen = document.getElementById('imagen')
    let checkAbc = document.getElementById('byc')
    
    inputCorreo.addEventListener('change', function(){
        fetch(`${window.location.origin}/api/mails`,{method:'POST'})
        .then(response => response.json())
        .then(users=>{
            users.forEach(user =>{
                if(user.correo === inputCorreo.value){
                    errorCorreo.innerHTML = 'Este correo ya fue registrado'
                    inputCorreo.classList.toggle('is-invalid')
                }        
            })
        })
    })
  
    inputCorreo.addEventListener('keyup',function(){
        switch(true){
            case this.value.length == 0:
                errorCorreo.innerHTML = 'Este campo es obligatorio'
                addIsInvalid(inputCorreo)
                break
            case !regExCorreo.test(this.value):
                this.innerHTML = 'Debes ingresar un correo válido'
                addIsInvalid(inputCorreo)
                break
            default:
                this.classList.remove('is-invalid')
                addIsValid(inputCorreo)
                errorCorreo.innerHTML = ''
                break
        }
    })


    inputPass.addEventListener('keyup',function(){
        switch(true){
            case this.value.length == 0:
                errorPass.innerHTML = 'La contraseña es obligatoria'
                addIsInvalid(inputPass)
            break
            case !regExPass.test(this.value):
                errorPass.innerHTML = 'La contraseña debe tener entre 6 y 12 carácteres, una mayúscula, una minúscula y un número'
                addIsInvalid(inputPass)
            break
            default:
                this.classList.remove('is-invalid')
                addIsValid(inputPass)
                errorPass.innerHTML = ""
            break
        }
    })
    
    inputPass2.addEventListener('keyup',function(){
        switch(true){
            case this.value.length == 0:
            errorPass2.innerHTML = 'Debe reingresar su contraseña'
            addIsInvalid(inputPass2)
            break
            case this.value !== inputPass.value:
            errorPass2.innerHTML = 'Las contraseñas no coinciden'
            addIsInvalid(inputPass2)
            break
            default:
                this.classList.remove('is-invalid')
                addIsValid(inputPass2)
                errorPass2.innerHTML = ""
            break
        }
    })
    inputNombre.addEventListener('keyup',function(){
        switch(true){
            case this.value.length == 0:
            errorNombre.innerHTML = 'El nombre es obligatorio'
            addIsInvalid(inputNombre)
            break
            case this.value.trim().length <3:
            errorNombre.innerHTML = 'El nombre debe ser mayor a 3 letras'
            addIsInvalid(inputNombre)
            break
            default:
                inputNombre.classList.remove('is-invalid')
                addIsValid(inputNombre)
                errorNombre.innerHTML = ""
                break;
        }
    })
    inputApellido.addEventListener('keyup',function(){
        switch(true){
            case this.value.length == 0:
                errorApellido.innerHTML = 'Debe ingresar su apellido'
                addIsInvalid(inputApellido)
            break
            case this.value.length < 2:
                errorApellido.innerHTML = 'El apellido debe tener al menos 2 carácteres'
                addIsInvalid(inputApellido)
            break
            default:
            this.classList.remove('is-invalid')
            addIsValid(inputApellido)
            errorApellido.innerHTML = ''
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
        let elements = formulario.elements

        if(checkAbc.checked == false){
            addIsInvalid(checkAbc)
            errorAbc.innerHTML = 'Debes aceptar nuestras bases y condiciones'
        }else if(checkAbc.checked == true){
            this.classList.remove('is-invalid')
            addIsValid(checkAbc)
            errorAbc.innerHTML = ''
        }
        
        let error = false
        for (let i = 0; i<elements.length-1; i++){
            if(elements[i].value == 0){
                addIsInvalid(elements[i])
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