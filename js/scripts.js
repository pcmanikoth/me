// Scripts



// Store Messages
var msg0 = 'Hola!';
var msg1 = 'Aloha';
var msg2 = 'YO!';

// Get Random Number
var numRand;
var max = 3;
numRand = Math.floor(Math.random() * max );

// Display Random Messages
$('h1').text( eval('msg' + numRand) );


$('button').click(function){
  
  location.reload(true);

};