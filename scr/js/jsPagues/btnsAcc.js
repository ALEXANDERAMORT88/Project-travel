const btnEstadia = document.getElementById("btnEstadia")
const btnInicio = document.getElementById("btnInicio")
const btnTransp = document.getElementById("btnTransp")
const btnVuelos = document.getElementById("btnVuelos")


btnEstadia.addEventListener("click", function(){
    window.location.href = "./estadia.html"
})

btnTransp.addEventListener("click", function(){
    window.location.href = "./transporte.html"
})

btnVuelos.addEventListener("click", function(){
    window.location.href = "./vuelos.html" 
})

btnInicio.addEventListener("click", function(){
    window.location.href = "./index.html"
})  