var vez = "o";

function atualizarPlacar() {
    if (vez == "o") {
        $(".placar img").attr("src", "assets/img/o.png");
    } else {
        $(".placar img").attr("src", "assets/img/x.jpg"); 
    }
}

function verificarCampeao() {

    var a1 = $(".a1").attr("data-marcado");
    var a2 = $(".a2").attr("data-marcado");
    var a3 = $(".a3").attr("data-marcado");

    var b1 = $(".b1").attr("data-marcado");
    var b2 = $(".b2").attr("data-marcado");
    var b3 = $(".b3").attr("data-marcado");
    
    var c1 = $(".c1").attr("data-marcado");
    var c2 = $(".c2").attr("data-marcado");
    var c3 = $(".c3").attr("data-marcado");

    var vencedor = "";

    for(var i = 0;i <= 1; i++) {
        if(i == 0) {
            var op = "o";
        } else {
            var op = "x";
        }

        if(a1 == op && b1 == op && c1 == op){
            vencedor = op;
        }
        else if(a2 == op && b2 == op && c2 == op){
            vencedor = op;
        }
        else if(a3 == op && b3 == op && c3 == op){
            vencedor = op;
        }
        else if(a1 == op && a2 == op && a3 == op){
            vencedor = op;
        }
        else if(b1 == op && b2 == op && b3 == op){
            vencedor = op;
        }
        else if(c1 == op && c2 == op && c3 == op){
            vencedor = op;
        }
        else if(a1 == op && b2 == op && c3 == op){
            vencedor = op;
        }
        else if(c1 == op && b2 == op && a3 == op){
            vencedor = op;
        }
    }

    if(vencedor != ""){
        if(vencedor == "o"){
            alert("BOLINHA VENCEU!")
        } else {
            alert("X VENCEU!")
        }

        $(".area").html("");
        $(".area").attr("data-marcado","");
    }
    
}

$(function(){
    atualizarPlacar();

    $(".area").bind("click",function(){

        if($(this).find("img").length == 0) {

            if(vez == "o") {
                $(this).html("<img src='assets/img/o.png' border='0' height='50'/>");
                $(this).attr("data-marcado","o");
                vez = "x";
            } else {
                $(this).html("<img src='assets/img/x.jpg' border='0' height='50'/>");
                $(this).attr("data-marcado","x");
                vez = "o";
            }

            atualizarPlacar();
            verificarCampeao();
        }
    });
});