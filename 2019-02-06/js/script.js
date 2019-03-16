function mostrar() {
    var nome = document.getElementById('texto').value;
    document.getElementById('textop').innerHTML = nome;
}
function validacao() {
    var idade = document.getElementById("idade");
    var email = document.getElementById("e-mail");
    if (!idade.checkValidity()) {
        document.getElementById("validar").innerHTML = idade.validationMessage;
        document.getElementById("validar").style.color = "red";
        document.getElementById("idade").focus();
        if (!email.checkValidity()) {
            document.getElementById("validar").innerHTML = email.validationMessage;
            document.getElementById("validar").style.color = "red";
            document.getElementById("email").focus();
        }
    }
    else {
        document.getElementById("validar").innerHTML = "Cadastrado com Sucesso";
        document.getElementById("validar").style.color = "blue";
    }
}
function validacaoidade() {
    
    if (document.getElementById("idade2").validity.rangeUnderflow) {
       
        document.getElementById("validaridade").innerHTML = "Você é menor de idade e não pode acessar esse site.";
    }

    else {

        if (document.getElementById("idade2").value == "" ) {
            document.getElementById("validaridade").innerHTML = "Preencha um número.";
        }
        else {
            document.getElementById("validaridade").innerHTML = "OK, pode acessar";
        }
    }
}
function addrow() {
    var tr = document.createElement("tr");
    var tab = document.getElementById("tabela");
    tab.appendChild(tr);
}