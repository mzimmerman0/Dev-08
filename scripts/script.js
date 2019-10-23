$(document).ready(function () {

$('#content').hide().fadeIn(3000); 

function resetSign01(){
    welcome = '';
    sign = '';
    calcSign();
    setSign();
}

function resetSign02(event) {
    var signData = ['greeting', 'userSign', 'tiles', 'subTotal', 'shipping', 'grandTotal'];
    
    for (var i=0; i<signData.length; i++) {
        setTextContentById(signData[i], '');
          
    }
    event.preventDefault();
}

// Create and initialize variables for the welcome message
var greeting = '[not initialized]'; 
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome;
var sign = '[not initialized]'; 
var tiles, subTotal, shipping, grandTotal;


function calcSign() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function initiateVars() {
    sign = 'North Alabama';
    greeting = 'Howdy'; 
    name = 'Michael';
    message = 'Plz check your order:';
    welcome = greeting +'! '+ name + ', '+ message;
    calcSign();
}

function setTextContentById(getId, setMsg) {
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = setMsg;
}


function setSign() {
setTextContentById('greeting', welcome);
setTextContentById('userSign', sign);
setTextContentById('tiles', tiles);
setTextContentById('subTotal','$' + subTotal);
setTextContentById('shipping','$' + shipping);
setTextContentById('grandTotal','$' + grandTotal);
 }

initiateVars();
setSign();

//Gets the "Reset button from index"
var el = document.getElementById('reset');


//Resets the page after the "Reset" button is clicked
el.addEventListener('click', resetSign02, false);

})