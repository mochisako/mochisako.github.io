"use strict";

$(function () {
  $(".fadeIn_up").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("on");
    }
  });
});
