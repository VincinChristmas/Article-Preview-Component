let isRotated = false;

document.getElementById("shareButton").addEventListener("click", function() {
  var element = document.getElementById("shareButton");
  var newForm = document.getElementById("main-footer");
  var newFormImage = document.getElementById('main-footer__img');
  var name = document.getElementById('main-footer__info');
  var shareBlock = document.getElementById('main-footer__shareResult');
  if (isRotated) {
    element.style.transform = "rotate(45deg)";
    newForm.style.background = "hsl(217, 19%, 35%)";
    newFormImage.style.display = "none";
    name.style.display = "none";
    shareBlock.style.display = "flex";

   
  } else {
    element.style.transform = "rotate(0deg)";
    newForm.style.background = "white";
    newFormImage.style.display = "block";
    name.style.display = "block";
    shareBlock.style.display = "none";

  }
  isRotated = !isRotated;
});


