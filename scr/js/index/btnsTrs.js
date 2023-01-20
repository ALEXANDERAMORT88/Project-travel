const btnEstadia = document.getElementById("btnEstadia")
const btnTransp = document.getElementById("btnTransp")
const btnVuelos = document.getElementById("btnVuelos")
const btnIngreso = document.getElementById("btnIngreso")


btnEstadia.addEventListener("click", function(){
    window.location.href = "./scr/pages/estadia.html"
})

btnTransp.addEventListener("click", function(){
    window.location.href = "./scr/pages/transporte.html"
})

btnVuelos.addEventListener("click", function(){
    window.location.href = "./scr/pages/vuelos.html"
})

btnIngreso.addEventListener("click", function(){
    window.location.href = "./registro.html"
})  