addEventListener("DOMContentLoaded", function() {
  var an = document.getElementById("attentionNow");
  an.addEventListener("click", function() {
    window.open("attention.html", "", "attention")
  });
  var al = document.getElementById("attention10secs");
  al.addEventListener("click", function() {
    setTimeout(function() { window.open("attention.html", "", "attention") }, 10000);
  });
});