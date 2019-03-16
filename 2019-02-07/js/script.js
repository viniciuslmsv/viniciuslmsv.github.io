/*Exercício 1*/
$(document).ready(function () {
    $("#bto").click(function(){
        $("#campo").hide();
    });
    $("#btm").click(function(){
        $("#campo").show();
    });
});
/*Exercício 2*/
$(document).ready(function () {
    $("#bto2").click(function () {
        $("#img1").hide(2000);
        $("#img2").hide(3000);
        $("#img3").hide(4000);
    });
    $("#btm2").click(function () {
        $("#img1").show(2000);
        $("#img2").show(3000);
        $("#img3").show(4000);
    });
});
/*Exercício 3*/
$(document).ready(function () {
    $("#bt3").click(function () {
        $("p").toggle();
    });

});
/*Exercício 4*/
$(document).ready(function () {
    $("#bt4").click(function () {
        $("#div1").fadeToggle(1000);
    });

});
/*Exercício 5*/
$(document).ready(function () {
    $(document).ready(function () {
        $("#btalerta").click(function () {
            var nome = $("#nome").val();
            var idade = $("#idade").val();

            alert("Seu nome é: " + nome + " e você tem " + idade + " anos.");
            $("#demo").text("Agora escrevi aqui: Seu nome é " + nome + " e você tem " + idade + " anos.");
        });
    });
});
/*Exercício 6*/
$(document).ready(function(){
    $("#btnrem").click(function(){
        $("#nome6").remove();
        $("#spannome").remove();
    });
    $("#btnadd").click(function () {
        var inputtexto = "<span id='spannome'>Nome: </span><input type='text' id='nome6'>";
        $("#p1").after(inputtexto);
    });
});
