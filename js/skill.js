var flag = true;
var offsetTop = $("#skill").offset().top;
$(document).on("scroll", function () {
  var height = $(window).height();
  if ($(window).scrollTop() + height - 100 > offsetTop) {
    $(".skill-per").each(function () {
      var $this = $(this);
      var per = $this.attr("per");
      $this.html(per + "%");
      if (flag) {
        $this.delay(500).animate(
          {
            width: per + "%",
          },
          1500
        );
      }
    });
    flag = false;
  }
});
