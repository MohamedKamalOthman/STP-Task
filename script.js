document.getElementById("changeColor").onclick = function () {
  document.getElementById("textcolor").style.color =
    document.getElementById("input").value;
};
document.getElementById("count").onclick = function () {
  var start = new Date(document.getElementById("start").value).getTime();
  var end = new Date(document.getElementById("end").value).getTime();
  // Find the distance between now and the count down date
  var distance = end - start;
  var x = setInterval(function () {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    distance -= 1000;
    // If the count down is finished, write some text
    if (distance < 0 || isNaN(distance)) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Time is Up!";
    }
  }, 1000);
};
