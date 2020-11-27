let regExCorreo =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

function addIsInvalid(element){
    element.classList.add('is-invalid')
}

function addIsValid(element){
    element.classList.add('is-valid')
}
window.addEventListener('load',()=>{
    let formLogin = document.getElementById('loginForm')

    let inputCorreo = document.getElementById('correo')
    let inputPass = document.getElementById('pass')
    
    let botonIngresar = document.getElementById('ingresar')
    
     inputCorreo.addEventListener('keyup',function(){
            switch(true){
                case inputCorreo.value.length == 0:
                    errorCorreo.innerHTML = 'Este campo es obligatorio'
                    addIsInvalid(inputCorreo)
                    break
                case !regExCorreo.test(this.value):
                    errorCorreo.innerHTML = 'Debes ingresar un correo válido'
                    addIsInvalid(inputCorreo)
                    break
                default:
                    inputCorreo.classList.remove('is-invalid')
                    addIsValid(inputCorreo)
                    errorCorreo.innerHTML = ''
                    break
            }
        })

        inputPass.addEventListener('keyup',function(){
            switch(true){
                case inputPass.value.length == 0:
                    errorPass.innerHTML = 'La contraseña es obligatoria'
                    addIsInvalid(inputPass)
                break
                case !regExPass.test(inputPass.value):
                    errorPass.innerHTML = 'La contraseña debe tener entre 6 y 12 carácteres, una mayúscula, una minúscula y un número'
                    addIsInvalid(inputPass)
                break
                default:
                    inputPass.classList.remove('is-invalid')
                    addIsValid(inputPass)
                    errorPass.innerHTML = ""
                break
            }
        })    

    formLogin.addEventListener('keyup',function(){
        let error = false
            if(inputCorreo.value.length == 0 || inputPass.value.length < 6 ){
                error = true
            }
        
        if(!error){
            botonIngresar.removeAttribute('disabled')
        }
        else{
            msgError.innerHTML = 'Los campos señalados son obligatorios'
        }
    })
})