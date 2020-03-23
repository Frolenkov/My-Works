$(function() {
  $(".collapse-wrap").click(function() {
    $(this).toggleClass("active");
    $('.menu-drawer').toggleClass("open");
  });
});