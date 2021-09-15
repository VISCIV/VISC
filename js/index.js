$(document).ready(function () {
  $(".menu-bar").click(function () {
    $(".menu-container").addClass("active");
    $(".sidemenu").addClass("active");
  });
  $("#profile-box").click(function () {
    $(".menu-container").addClass("active");
    $(".user-container").addClass("active");
  });
  $("#label-profile").click(function () {
    $(".menu-container").addClass("active");
    $(".user-container").addClass("active");
  });
  $(".menu-container").click(function () {
    $(this).removeClass("active");
    $(".sidemenu").removeClass("active");
    $(".user-container").removeClass("active");
  });
  $("#like-on").click(function(){
    $(this).toggle();
    $("#like-off").toggle();
  });
  $("#like-off").click(function(){
    $(this).toggle();
    $("#like-on").toggle();
  });
});
