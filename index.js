const segundosEnMin = 60;
const minEnHora = 60;
const horasEnDia = 24;
const diasSemana = 365 / 7;
const diasEnAnio = 365;
var segundos;
var minutos;
var horas;
var dias;
var semanas;
var edad;


function vida(){

  edad = document.getElementById("edad").value;

  semanas = edad * diasSemana.toFixed(2);
  document.getElementById("semanas").innerHTML = semanas;

  dias = edad * diasEnAnio;
  document.getElementById("dias").innerHTML = dias;

  horas = edad * horasEnDia * diasEnAnio;
  document.getElementById("horas").innerHTML = horas;

  minutos = edad * minEnHora * horasEnDia * diasEnAnio;
  document.getElementById("minutos").innerHTML = minutos;

  segundos = edad * segundosEnMin * minEnHora * horasEnDia * diasEnAnio
  document.getElementById("segundos").innerHTML = segundos;


}


