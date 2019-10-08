window.onload = function () {
    
    var tablaCuerpo = document.getElementById("table_body")
    
    verificarLongitud();
    var boton = document.getElementById("submit_btn");
    
    boton.addEventListener("click", ()=>{
        
        var fila = document.createElement("tr")
        var celdaEvento = document.createElement("td")
        var celdaAccidente = document.createElement("td")
        var celdaFecha = document.createElement("td")

        fila.appendChild(celdaEvento);
        fila.appendChild(celdaAccidente);
        fila.appendChild(celdaFecha);
        tablaCuerpo.appendChild(fila);
    });


};


function verificarLongitud() {
    var cajaTexto =document.getElementById("event_field")
    cajaTexto.addEventListener("keyup", ()=>{
        boton.disabled=false
    });

}
