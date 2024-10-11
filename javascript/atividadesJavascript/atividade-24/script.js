let box = document.getElementById("inputBox")

function escreverDisplay(input){
    box.value += input;
}

function limpar(){
    box.value = ''
}

function apagar(){
    box.value = box.value.slice(0, -1);
}

function quadrado(){
    box.value = '(' + box.value + ')**2'
}

function calcular(){
    box.value = eval(box.value)
}

function raiz(){
    box.value = 'Math.sqrt(' + box.value + ')'
}



function fundoAleatorioEscuro(){
    let R = parseInt(Math.random() * 60)
    let G = parseInt(Math.random() * 60)
    let B = parseInt(Math.random() * 60)
    //document.body.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
}

function fundoAleatorioClaro(){
    let R = parseInt(Math.random() * 100) + 150
    let G = parseInt(Math.random() * 100) + 150
    let B = parseInt(Math.random() * 100) + 150
    //document.body.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
}

function resetFundo(){
    document.body.style.backgroundColor = "white"
}
