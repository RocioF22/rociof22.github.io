window.onscroll = function() {scrollFunction()};

//Se crea un función que se ejecuta cada vez que se desplaza la página hacia arriba o hacia abajo.//
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("boton-scroll").style.display = "block";
  } else {
    document.getElementById("boton-scroll").style.display = "none";
  }
}

const button = document.getElementById("color-btn");
const barraNav = document.getElementById("barra");
const links = document.querySelectorAll("nav a");

//Se crea una funcion para que cuando se encuentre en modo oscuro se cambie el icono del boton a un sol.//
function inicializarModo() {
  const modo = localStorage.getItem("modo");
  if (modo === "oscuro") {
    document.documentElement.setAttribute("data-tema", "oscuro");
    button.innerHTML = '<i class="fa-sharp fa-solid fa-sun"></i>'
  } else {
    document.documentElement.setAttribute("data-tema", "claro");
    button.innerHTML = '<i class="fa-solid fa-moon"></i>'
  }
}

//Se crea una funcion que cambia el modo de la pagina de oscuro a claro y viceversa.//
//Se utiliza el localStorage para almacenar y recuperar el estado del tema en el navegador,lo que permite que la página recuerde el modo que se ha elegido.//
function intercambiarModo() {
  const modo = localStorage.getItem("modo");
  if (modo === "oscuro") {
    document.documentElement.setAttribute("data-tema", "claro");
    button.innerHTML = '<i class="fa-solid fa-moon"></i>'
    localStorage.setItem("modo", "claro");
  } else {
    document.documentElement.setAttribute("data-tema", "oscuro");
    button.innerHTML = '<i class="fa-sharp fa-solid fa-sun"></i>'
    localStorage.setItem("modo", "oscuro");
  }
}

inicializarModo()
button.addEventListener('click',intercambiarModo);