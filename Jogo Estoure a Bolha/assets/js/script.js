function addBall() {

    var x = Math.floor(Math.random()*1000);
    var y = Math.floor(Math.random()*550);
    var collor = Math.floor(Math.random()*4);
    var ball = $("<div class='ball'></div>");

    ball.css("left", x+"px");
    ball.css("top", y+"px");

    switch(collor){
        case 0:
            ball.css("background-color","blue");
            break;
        case 1:
            ball.css("background-color","red");
            break;
        case 2:
            ball.css("background-color","yellow");
            break;
        case 3:
            ball.css("background-color","green");
            break;
    }

    ball.bind("click",function(){
        $(this).fadeOut("fast");
        score++;
        updateScore();
    });

    $(document.body).append(ball);
}

function updateScore() {
    $("#score").html(score);
}

var score = 0;

$(function(){
    $("#start").bind("click",function(){
        setInterval(addBall,1000);
    });
});