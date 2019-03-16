
$(document).ready(function(){ /*com JQuery*/
    $("#btnadd").click(function () {
        var inputtexto = "<textarea name='mensagem' rows='5' cols='30'></textarea><br>";
        $("#p1").after(inputtexto);
    });
});

function valida() { /*javascript tradicional*/
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    if (!cpf.checkValidity()) {
        document.getElementById("validar").innerHTML = cpf.validationMessage;
        document.getElementById("validar").style.color = "red";
        document.getElementById("cpf").focus();
        if (!nome.checkValidity()) {
            document.getElementById("validar").innerHTML = nome.validationMessage;
            document.getElementById("validar").style.color = "red";
            document.getElementById("nome").focus();
        }
    }
    else {
        document.getElementById("validar").innerHTML = "Cadastrado com Sucesso";
        document.getElementById("validar").style.color = "blue";
    }
}

