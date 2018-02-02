// Cardify
// Función autoejecutable
(function(obj) {
  $.fn.cardify = function() {
    let $listOfImages = $('img'); 
    $listOfImages.each(function() {
      $(this).one('mouseover', () => {
        // $(this).addClass('opacity');
        let $textAlt = $(this).attr('alt');
        let $figure = $('<figure></figure>');
        $(this).wrap($figure).parent();
        let $figcaption = $('<figcaption></figcaption>');
        $figcaption.addClass('figcaption-position');
        $(this).parent().append($figcaption);
        console.log($(this).next().text($textAlt));
      });
    });
    return $(this);
  };
}(jQuery));
