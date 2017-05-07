//Código para validación del mail

var name1 = document.querySelector('#js-name');
var email1 = document.querySelector('#js-mail');
var email2 = document.querySelector('#js-re-mail');

function validationMail() {
  if (email1.value === email2.value) {
    //console.log("Gracias " + name1.value  +" tu cuenta se ha creado correctamente");

    //var ok = document.getElementById("js-error");
    //ok.innerHTML = "Gracias " + name1.value  +" tu cuenta se ha creado correctamente";
    window.location = 'confirmation_page.html';

  } else {
    var error = document.getElementById("js-error");
    error.innerHTML = "No se ha podido crear la cuenta";
    console.log("No se ha podido crear la cuenta");
    email2.style.border="1px solid red"
  }
}
var validat = document.querySelector(".submit");
validat.addEventListener("click",validationMail);

//Creación listas para la fecha nacimiento

//dias
var dayList = document.querySelector("#js-birthdayDay");
var dias = [];

for (var i = 1; i <= 31; i++) {
  var optionDay = document.createElement("option");
  optionDay.value = [i];
  optionDay.text =[i];
  dayList.appendChild(optionDay);
}

//meses
var monthList = document.querySelector("#js-birthdayMonth")
var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (var i = 0; i < month.length; i++) {
  var option = document.createElement("option");
  option.value = month[i];
  option.text = month[i];
  monthList.appendChild(option);
}

//años
var yearList = document.querySelector("#js-birthdayYear")


  for (var j = 2017; j >= 1900;  j--) {
    var optionYear = document.createElement("option");
    optionYear.value = [j];
    optionYear.text = [j];
    yearList.appendChild(optionYear);
  }
