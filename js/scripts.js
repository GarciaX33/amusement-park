$(document).ready(function(){

var height = parseInt(prompt("How tall are you (inches)?"));

if (height <= 72) {
  $('.b72').css('background-color' , 'green');
  $('.a48').css('background-color', 'red');
} else {
  $('.b72').css('background-color' , 'red');
}
if (height >= 48) {
  $('.a48').css('background-color', 'lightgreen');
}

  //if (height >= '.a-height'){
    //$('.ride').css('background-color','green');
 //}
});
