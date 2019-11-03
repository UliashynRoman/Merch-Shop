var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-area").style.top = "0";
  } else {
    document.getElementById("navbar-area").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}

