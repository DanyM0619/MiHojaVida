console.log("Hoja de vida interactiva cargada");

document.getElementById("addSkill").addEventListener('click', function() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    window.alert("Ingresaste esta habilidad: " + newSkill);
});

document.getElementById("addEmail").addEventListener('click', function(){
    let newEmail = prompt("Introduce un correo: ");
    window.alert("Gracias: "+newEmail+". Pronto nos contactaremos.");
})