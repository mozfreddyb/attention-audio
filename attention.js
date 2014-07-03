addEventListener("DOMContentLoaded", function() {
  var btnclose = document.getElementById("button-close");
  btnclose.addEventListener("click", function() { window.close(); });
  var btna = document.getElementById("btna");
  btna.addEventListener("click", function(e) {
    opener.postMessage(e);
    console.log(e);
  })
});

  opener.postMessage("meh");
  console.log(this);
  addEventListener("click", function(event) {
    console.log("click", event);
  });