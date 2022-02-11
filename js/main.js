$(document).ready(function(){

    const words = ["Hello", "World", "Test"];
    
    var wordIndex = 0;
    var randomStatus = 0;

    $(".text-font").text(words[wordIndex]);

    $(".left-half").click(function(){
        if(randomStatus = 0){
            if(wordIndex == 0){
                wordIndex = words.length - 1;
            }else{
                wordIndex--;
            }
        }else{
            wordIndex = Math.floor((Math.random()*words.length));
        }
        $(".text-font").text(words[wordIndex]);
    });

    $(".right-half").click(function(){
        if(randomStatus = 0){
            if(wordIndex == words.length - 1){
                wordIndex = 0;
            }else{
                wordIndex++;
            }
        }else{
            wordIndex = Math.floor((Math.random()*words.length));
        }
        $(".text-font").text(words[wordIndex]);
    });

    $(".order-button").click(function(){
        $(".order-button").css("background-color", "gray");
        $(".random-button").css("background-color", "aquamarine");
    });
    $(".random-button").click(function(){
        $(".order-button").css("background-color", "aquamarine");
        $(".random-button").css("background-color", "gray");
    });
});

