const certificaciones = ["Tecnico Sistemas"," Tecnico Aux.Logistico"," Tecnico Electricista"," Ing. Sistemas"];

document.getElementById("viewCertifications").addEventListener('click',
function mostrarCertificaciones(){
    window.alert("Tengo 4 proyectos");
    let viewCetification = prompt("Digite los numeros de proyectos que desea ver");
    if(viewCetification <= 4){
    for(let i=0; i<viewCetification; i++){
        alert(certificaciones[i]);
    }
}else{
    alert("No digito el numero que desea.");
}
}
)
