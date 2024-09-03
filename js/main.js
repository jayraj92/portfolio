//Quoto generator
function generateQuote() {
    var name = document.getElementById('input1').value;
    var activity = document.getElementById('input2').value;

    if (name && activity) {
        var quote = name + ", keep enjoying " + activity + "! You are doing great!";
        document.getElementById('quote').textContent = quote;
    } else {
        document.getElementById('quote').textContent = "Please fill in both fields.";
    }
}


//scroll to top 
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("year").innerHTML = new Date().getFullYear();