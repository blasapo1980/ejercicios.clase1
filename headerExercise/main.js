var boton = document.querySelector(".btn-menu");
var menu = document.querySelector(".show-menu");

function toggle() {
 menu.style.display="block";
}

boton.addEventListener('click', toggle);
