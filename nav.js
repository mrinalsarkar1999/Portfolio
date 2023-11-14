$(document).ready(function () {
  $("#contact-link").click(function (e) {
    $("#contact-link").attr("href", "#contact");
    $(".page-footer").css("display", "flex");
    $(".social").css("display", "flex");
  });
  $("#about-link").click(function (e1) {
    console.log("Clicked");
    $("#about-link").attr("href", "#about");
    $(".about").css("display", "flex");
  });
});
