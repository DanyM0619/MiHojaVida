
document.getElementById("calificar").addEventListener('click', function() {
window.alert("¡Gracias por visitar mi seccion de Mis preoyectos.");

let calificacion = prompt("Del 1 a 10 ¿Como calificarías mi hoja de vida?")
if (calificacion >= 1 && calificacion <= 10){
alert("¡Gracias por calificar un "+calificacion+"!");
}else{
    alert("No se obtuvo la calificacion");
}
})