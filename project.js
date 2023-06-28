function myFunction() {
  var y = document.getElementById("logo");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block"
  } else {
    x.style.display = "block";
    x.style.textAlign = "center";
    y.style.display = "none";


  }
}
