window.alert("Proyecto de portafolio para Electricidad y Magnetismo");

var campoElectrico = 0;

function CalcularCampoElectrico(){
    fuerzaElectrica = document.getElementById('FuerzaElectrica').value;
    cantidadDeCarga =document.getElementById('CantidadDeCarga').value;
    

    campoElectrico=fuerzaElectrica/cantidadDeCarga;
    
    document.getElementById('CampoElectrico').innerHTML = campoElectrico;

    
}
