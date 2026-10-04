const pantallaEdad = document.getElementById("edad");
const pagina = document.getElementById("pagina");
const botonEntrar = document.getElementById("entrar");
const botonSalir = document.getElementById("salir");
const troll = document.getElementById("troll");
const botonCerrar = document.getElementById("cerrar");
const perfiles = document.querySelectorAll(".ver-perfil");

botonEntrar.addEventListener("click", function () {
    pantallaEdad.classList.add("oculto");
    pagina.classList.remove("oculto");
});

botonSalir.addEventListener("click", function () {
    alert("Acceso denegado 💀");
});

perfiles.forEach(function (boton) {
    boton.addEventListener("click", function () {
        troll.classList.remove("oculto");
    });
});

botonCerrar.addEventListener("click", function () {
    troll.classList.add("oculto");
});
