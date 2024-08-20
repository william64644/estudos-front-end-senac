function validarFormulario() {
    const nome = document.getElementById("usuario").value;
    const email = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    mensagemErro.innerHTML = "";

    if (nome === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo Usuário.";
        return false;
    }

    if (email === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo Senha.";
        return false;
    }

    return true;
}