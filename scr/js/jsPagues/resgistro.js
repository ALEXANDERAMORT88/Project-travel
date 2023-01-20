const containerIngreso = document.getElementById("contaIngreso")
const containerRegistro = document.getElementById("contaRegistro")

const formIngreso = document.getElementById("formIngreso")
const formRegis = document.getElementById("formRegis")

const name1 = document.getElementById("name1")
const surName1 = document.getElementById("surName1")
const cc1 = document.getElementById("cc1")
const password1 = document.getElementById("password1")

const btnR = document.getElementById("btnR")
const btnI = document.getElementById("btnI")

formIngreso.addEventListener("submit",function (e){
    e.preventDefault()

    const nme = localStorage.getItem('userName')
    const surNme = localStorage.getItem('userSurName')
    const cc = localStorage.getItem('userCc')
    const password = localStorage.getItem('userPassword')

    let userName = name1.value
    let userSurName = surName1.value
    let userCc = cc1.value
    let userPassword = password1.value

    if(nme !== null){
        localStorage.setItem("userName", userName)
        localStorage.setItem("userSurName", userSurName)
        localStorage.setItem("usercc", userCc)
        localStorage.setItem("userPassword", userPassword)

        if( (cc === userCc) && (password === userPassword)){
            window.location.href = "../../index.html"
        } else {
            alert('El Nombre o la contraseña no coinciden')
        }
    }else {
    alert ('Usuario sin Registrar, por favor Registrese Primero')
    }
})

formRegis.addEventListener("submit", function(e){
    e.preventDefault()

    let userName = name1.value
    let userSurName = surName1.value
    let userCc = cc1.value
    let userPassword = password1.value
    
    localStorage.setItem("userName", userName)
    localStorage.setItem("userSurName", userSurName)
    localStorage.setItem("userCc", userCc)
    localStorage.setItem("userPassword", userPassword)

})
window.location.href = "../../pages/1index.html"

btnR.addEventListener("click", function (){
    contaRegistro.classList.remove("d-none")
    contaIngreso.classList.add("d-none")
})

btnI.addEventListener("click", function (){
    contaRegistro.classList.add("d-none")
    contaIngreso.classList.remove("d-none")
})






