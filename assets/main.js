let isRotated = false;
let doRotate = false

document.getElementById("shareButton").addEventListener("click", function() {
  var social = document.getElementById('social');
  var nonSocial = document.getElementById('non-social');
  if (isRotated) {
    nonSocial.style.display = "none";
    social.style.display = "flex";
    
   
  } else {
    social.style.display = "none";
    nonSocial.style.display = "flex";
  }
  isRotated = !isRotated;
});

document.getElementById("shareButtonSocial").addEventListener("click", function() {
  var social = document.getElementById('social');
  var nonSocial = document.getElementById('non-social');
  if (doRotate) {
    nonSocial.style.display = "flex";
    social.style.display = "none";
    
   
  } else {
    social.style.display = "flex";
    nonSocial.style.display = "none";
  }
  doRotate = !doRotate;
});



