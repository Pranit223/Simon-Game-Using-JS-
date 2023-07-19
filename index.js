
var pattern=[];
var level=0;
var buttonColours=["green","red","yellow","blue"]
var userClickedPattern=[];
var started =0;

$( document).on( "keypress", function() {
    started++;
    if(started===1){
        nextSequence();
        
    }

    // console.log( started );
    
    // console.log( started );
  } );

function nextSequence(){
    level++;
    var h1id=$("h1").text("Level  "+ level);
    userClickedPattern=[];
    var randomNumber=Math.random();
    randomNumber=Math.floor(randomNumber*4);
    var randomChosenColour=buttonColours[randomNumber];
    pattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut('fast').fadeIn('fast');
    console.log(pattern);


}


$('.btn').click(function(){
    var userChosenColour=$(this).attr("id");
    console.log(userChosenColour+"/");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    // console.log(userClickedPattern);

});



function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");


    }, 100); 
    

}
function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel]==pattern[currentLevel]){
    console.log("phla function chala");
    if(userClickedPattern.length===pattern.length){
        console.log("dusra function chala");
    console.log("sucess");
    setTimeout(function(){
        console.log("nextseq called");
        nextSequence();
        

    }, 1000); 
}
    
}
else{
    console.log("fail");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 500); 
    $("h1").text("Enter any key to RESTART");
    startOver();
}
console.log(pattern);
console.log("last");
console.log(userClickedPattern);


}
function startOver(){
    pattern=[];
    level=0;
    started=0;
}