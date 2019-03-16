function bemvindo() {
    alert("Bem Vindo");
}

function paragrafo() {
    document.getElementById("texto").innerHTML = "Mensagem";
}
function somar() {
    var x = document.getElementById('n1').value;
    var y = document.getElementById('n2').value;
    var soma = document.getElementById('resultado').innerHTML=(Number(x)+Number(y));
    return soma;
}
function subtrair() {
    var x = document.getElementById('n1').value;
    var y = document.getElementById('n2').value;
    var subt = document.getElementById('resultado').innerHTML=(x-y);
    return subt;
}
function multiplicar() {
    var x = document.getElementById('n1').value;
    var y = document.getElementById('n2').value;
    var mult = document.getElementById('resultado').innerHTML=(x*y);
    return mult;
}
function dividir() {
    var x = document.getElementById('n1').value;
    var y = document.getElementById('n2').value;
    var divi = document.getElementById('resultado').innerHTML=(x/y);
    return divi;
}
function mostrar() {
    var nome = document.getElementById('nome').value;
    document.getElementById('nomep').innerHTML = nome;
}