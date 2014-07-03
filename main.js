addEventListener("DOMContentLoaded", function() {
  var np = document.getElementById("normalPopup");
  np.addEventListener("click", function() {
     popups.push(window.open("popup.html"));
  });
  var an = document.getElementById("attentionNow");
  an.addEventListener("click", function() {
    popups.push(window.open("attention.html", "", "attention"))
  });

  var al = document.getElementById("attention10secs");
  al.addEventListener("click", function() {
    setTimeout(function() { popups.push(window.open("attention.html", "", "attention")) }, 10000);
  });

  var btnplaynormal = document.getElementById("playnormal").addEventListener("click", function (e) {
    setTimeout(function() {document.getElementById("normalaudio").play() }, 5000);
  });

  var btnplayringer = document.getElementById("playr").addEventListener("click", function (e) {
    setTimeout(function() {document.getElementById("ringer").play() }, 5000);
  });

  var btnplaytelephony = document.getElementById("playtp").addEventListener("click", function (e) {
    setTimeout(function() { document.getElementById("telephony").play() }, 5000)
  });
});
window.onmessage= function(e) {
  console.log(e);
}
var popups = [];