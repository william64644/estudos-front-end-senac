let data = new Date();
let dia = data.getDate();
let diaSemana = data.getDay();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();

let ds;
if (diaSemana === 0) {
  ds = "Domingo";
} else if (diaSemana === 1) {
  ds = "Segunda-feira";
} else if (diaSemana === 2) {
  ds = "Terça-feira";
} else if (diaSemana === 3) {
  ds = "Quarta-feira";
} else if (diaSemana === 4) {
  ds = "Quinta-feira";
} else if (diaSemana === 5) {
  ds = "Sexta-feira";
} else if (diaSemana === 6) {
  ds = "Sabado-feira";
}

let mesAno;
if (mes === 1) {
  mesAno = "Janeiro";
} else if (mes === 2) {
  mesAno = "Fevereiro";
} else if (mes === 3) {
  mesAno = "Março";
} else if (mes === 4) {
  mesAno = "Abril";
} else if (mes === 5) {
  mesAno = "Maio";
} else if (mes === 6) {
  mesAno = "Junho";
} else if (mes === 7) {
  mesAno = "Julho";
} else if (mes === 8) {
  mesAno = "Agosto";
}

let dataCompleta = ds + " " + dia + " de " + mesAno + " de " + ano;

const horas1 = document.getElementById("horas1");
const minutos1 = document.getElementById("minutos1");
const segundos1 = document.getElementById("segundos1");

// Aplicando o intervalo para o relogio funcionar
const relogio1 = setInterval(function time() {
  let tempo = new Date();
  let h = tempo.getHours();
  let m = tempo.getMinutes();
  let s = tempo.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  horas1.textContent = h;
  minutos1.textContent = m;
  segundos1.textContent = s;
});

const horas2 = document.getElementById("horas2");
const minutos2 = document.getElementById("minutos2");
const segundos2 = document.getElementById("segundos2");

// Aplicando o intervalo para o relogio funcionar
const relogio2 = setInterval(function time() {
  let tempo = new Date();
  let h = tempo.getHours();
  let m = tempo.getMinutes();
  let s = tempo.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  horas2.textContent = h;
  minutos2.textContent = m;
  segundos2.textContent = s;
});

const horas3 = document.getElementById("horas3");
const minutos3 = document.getElementById("minutos3");
const segundos3 = document.getElementById("segundos3");

// Aplicando o intervalo para o relogio funcionar
const relogio3 = setInterval(function time() {
  let tempo = new Date();
  let h = tempo.getHours();
  let m = tempo.getMinutes();
  let s = tempo.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  horas3.textContent = h;
  minutos3.textContent = m;
  segundos3.textContent = s;
});

const horas4 = document.getElementById("horas4");
const minutos4 = document.getElementById("minutos4");
const segundos4 = document.getElementById("segundos4");
const data4 = document.getElementById("data4");

// Aplicando o intervalo para o relogio funcionar
const relogio4 = setInterval(function time() {
  let tempo = new Date();
  let h = tempo.getHours();
  let m = tempo.getMinutes();
  let s = tempo.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  horas4.textContent = h;
  minutos4.textContent = m;
  segundos4.textContent = s;
  data4.textContent = dataCompleta;
});

const horas5 = document.getElementById("horas5");
const minutos5 = document.getElementById("minutos5");
const segundos5 = document.getElementById("segundos5");
const data5 = document.getElementById("data5");

// Aplicando o intervalo para o relogio funcionar
const relogio5 = setInterval(function time() {
  let tempo = new Date();
  let h = tempo.getHours();
  let m = tempo.getMinutes();
  let s = tempo.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  horas5.textContent = h;
  minutos5.textContent = m;
  segundos5.textContent = s;
  data5.textContent = dataCompleta;
});

const horas6 = document.getElementById("horas6");
const minutos6 = document.getElementById("minutos6");
const segundos6 = document.getElementById("segundos6");
const data6 = document.getElementById("data6");

// Aplicando o intervalo para o relogio funcionar
const relogio6 = setInterval(function time() {
  let tempo = new Date();
  let h = tempo.getHours();
  let m = tempo.getMinutes();
  let s = tempo.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  horas6.textContent = h;
  minutos6.textContent = m;
  segundos6.textContent = s;
  data6.textContent = dataCompleta;
});
