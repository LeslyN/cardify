$(document).ready(function() {
  let $images = $('img');
  $images.each(function() {
    $(this).mouseover(function() {
      $(this).cardify();  
    });
  });
});