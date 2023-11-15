$(document).ready(function () {
  // $().fadeIn(900);
  $(".nav-ul").slideDown(1000).css("display", "flex");
  $(".profile>img").fadeIn(1000);
  $("#quote").stop(true, true).animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    1000
  );
  $("#summary").stop(true, true).animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    1000
  );

  // $(".viewport-header").slideDown(1000);
  $("#contact-link").click(function () {
    $("#contact-link").attr("href", "#contact");
    $(".page-footer").css("display", "flex");
    $(".social").css("display", "flex");
  });
  $("#about-link").click(function () {
    $("#about-link").attr("href", "#about");
    $(".about").fadeIn(400).css("display", "flex");
  });
  $("#shop-link").click(function () {
    $("#shop-link").attr("href", "#shop");
    $(".shop").css("display", "flex");
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/photos",
      method: "get",
      dataType: "json",
      success: function (response) {
        var div = $("<div class='cards'></div>");
        for (var i = 0; i < 6; i++) {
          const url = response[i].url;
          var subDiv = $("<div class = 'products'></div>");
          var image =
            "<img src=" + url + " alt='Profile' class = 'product-images'>";
          var product_name = "Product " + response[i].id;
          var p = $("<p></p>").text(product_name);
          subDiv.append(image);
          subDiv.append(p);
          div.append(subDiv);
        }
        $(".cards-container").html(div);
      },
    });
  });
});
