//window.alert("Proyecto de portafolio para Electricidad y Magnetismo");

var campoElectrico = 0;

function CalcularCampoElectrico(){
    fuerzaElectrica = document.getElementById('FuerzaElectrica').value;
    cantidadDeCarga =document.getElementById('CantidadDeCarga').value;
    

    campoElectrico=fuerzaElectrica/cantidadDeCarga;
    
    
    document.getElementById('CampoElectrico').innerHTML = campoElectrico;
    
}

function CalcularFuerzaElectrica(){
    carga1 = document.getElementById('Carga1').value;
    carga2 = document.getElementById('Carga2').value;
    distancia = document.getElementById('Distancia').value;

    fuerzaElectrica=(9000000000*(carga1*carga2))/(distancia*distancia);

    document.getElementById('FuerzaElectrica').innerHTML = fuerzaElectrica;

}
