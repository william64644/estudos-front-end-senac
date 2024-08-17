alert("Escreva qualquer coisa");

function fundoBranco() {
	document.body.style.backgroundColor = "white";
}

function corDaLetra(event) {
	let letra = String.fromCharCode(event.keyCode);
	console.log(event.key);
	let cor;

	switch (event.key) {
		case "a":
			cor = "rgb(0, 0, 255)"; // azul
			break;
		case "b":
			cor = "rgb(245, 245, 220)"; // bege
			break;
		case "c":
			cor = "rgb(128, 128, 128)"; // cinza
			break;
		case "d":
			cor = "rgb(255, 215, 0)"; // dourado
			break;
		case "e":
			cor = "rgb(80, 200, 120)"; // esmeralda
			break;
		case "f":
			cor = "rgb(255, 0, 255)"; // fúcsia
			break;
		case "g":
			cor = "rgb(128, 0, 32)"; // grená
			break;
		case "h":
			cor = "rgb(223, 115, 255)"; // heliotrópio
			break;
		case "i":
			cor = "rgb(75, 0, 130)"; // índigo
			break;
		case "j":
			cor = "rgb(0, 168, 107)"; // jade
			break;
		case "k":
			cor = "rgb(142, 204, 57)"; // kiwi
			break;
		case "l":
			cor = "rgb(230, 230, 250)"; // lavanda
			break;
		case "m":
			cor = "rgb(165, 42, 42)"; // marrom
			break;
		case "n":
			cor = "rgb(57, 255, 20)"; // néon
			break;
		case "o":
			cor = "rgb(204, 119, 34)"; // ocre
			break;
		case "p":
			cor = "rgb(192, 192, 192)"; // prata
			break;
		case "q":
			cor = "rgb(255, 182, 193)"; // quartzo
			break;
		case "r":
			cor = "rgb(128, 0, 128)"; // roxo
			break;
		case "s":
			cor = "rgb(15, 82, 186)"; // safira
			break;
		case "t":
			cor = "rgb(64, 224, 208)"; // turquesa
			break;
		case "u":
			cor = "rgb(18, 10, 143)"; // ultramarino
			break;
		case "v":
			cor = "rgb(238, 130, 238)"; // violeta
			break;
		case "w":
			cor = "rgb(114, 47, 55)"; // wine
			break;
		case "x":
			cor = "rgb(255, 0, 0)"; // xadrez (vermelho)
			break;
		case "y":
			cor = "rgb(255, 121, 97)"; // yam
			break;
		case "z":
			cor = "rgb(44, 130, 201)"; // zircão
			break;
		default:
			cor = "rgb(0, 0, 0)"; // preto
	}

	console.log("A cor correspondente é: " + cor);
	document.body.style.backgroundColor = cor;

	let elemento = document.createElement("span");
	elemento.textContent = event.key;
	elemento.style.color = cor;
	document.body.appendChild(elemento);
	console.log(linha);
	document.write(linha);
}
