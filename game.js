var buttonColor = ["red", "blue", "green", "yellow"], gamePattern = [], userClickedPattern = [], level = 0, i = 0;

if(level == 0){
  $("h1").text("Press a Key to Start");
}

$("body").keypress(function(event){
  level += 1;
  $("h1").text("Level " + level);
  nextSequence();
});

function nextSequence(){
  userClickedPattern = [];
  randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColor[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  console.log(gamePattern);
}

$(".btn").click(handleClick);

function handleClick(){
  userChosenColor = this.id;
  $("#"+userChosenColor).fadeOut(100).fadeIn(100);
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  if(userChosenColor === gamePattern[i]){
    i += 1;
    userClickedPattern.push(userChosenColor);
    if(i === level){
      level += 1;
      i = 0;
      setTimeout(function(){
        $("h1").text("Level " + level);
        nextSequence();
      }, 1000);
    }
  }
  else{
    gamePattern = [];
    level = 0;
    i=0;
    $("h1").text("Press a Key to Start");
    var sound = new Audio("sounds/wrong.mp3");
    sound.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
      // nextSequence();
    }, 200);
  }
}

function playSound(name){
  var sound = new Audio("sounds/"+name+".mp3");
  sound.play();
  animatePress(name);
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
      $("#"+currentColor).removeClass("pressed");
  }, 100);
}
