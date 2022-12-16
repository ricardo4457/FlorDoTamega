$(document).ready( function(){ 
  $(".info-circle").on('mouseover', function() {
      $(".info-circle-content-text").removeClass("show");
      $(this).siblings(".info-circle-content").children(".info-circle-content-text").addClass("show");
  });
});