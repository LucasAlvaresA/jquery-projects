$(function(){

        $("button").bind("click", function(){

            var altura = $("#altura").val();
            var peso = $("#peso").val();

            //Erro quando o usuario digitar a altura com virgula corrigido
            altura = altura.replace(",", ".");
            peso = peso.replace(",", ".");

            //IMC = Peso (quilos) + altura²
            var imc = peso / (altura*altura);

            if(imc < 16) {
                var traducao = "Baixo peso muito grave";
            } else if(imc >= 16 && imc < 16.99) {
                var traducao = "Baixo peso grave";
            }else if(imc >= 17 && imc < 18.49) {
                var traducao = "Baixo peso";
            }else if(imc >= 18.50 && imc < 24.99) {
                var traducao = "Peso normal";
            }else if(imc >= 25 && imc < 29.99) {
                var traducao = "Sobrepeso";
            }else if(imc >= 30 && imc < 34.99) {
                var traducao = "Obesidade Grau I";
            }else if(imc >= 35 && imc < 39.99) {
                var traducao = "Obesidade Grau II";
            }else if(imc >= 40) {
                var traducao = "Obesidade Grau III";
            }
            // Resultado sem limites de casas decimais:
            // $(".resultado").html("Seu IMC é: "+imc+" kg/m² e seu status é: "+traducao);
            
            //Resultado com limite de duas casas decimais:
            $('.resultado').html(`Seu IMC é: ${imc.toFixed(2)} kg/m² e ${traducao}`);
        });
});