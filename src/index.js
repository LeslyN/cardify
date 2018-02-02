// Cardify
// Función autoejecutable
(function(obj) {
  $.fn.cardify = function() {
    let $listOfImages = $('img'); 
    $listOfImages.each(function() {
      // Evento que se ejecuta cuando el mouse está encima de la imagen
      $(this).one('mouseover', () => {
        let $textAlt = $(this).attr('alt');
        let $figure = $('<figure></figure>');
        $(this).wrap($figure).parent();
        let $figcaption = $('<figcaption></figcaption>');
        $figcaption.addClass('figcaption-position');
        $(this).parent().append($figcaption);
        $figcaption.show();
        console.log($(this).next().text($textAlt));
      });
    });

    $listOfImages.each(function() {
      // Evento que se ejecuta cuando el mouse deja de estar encima de la imagen
      let $mouseout = $(this).one('mouseout', () => {
        $(this).unwrap('figure');
        $(this).next().hide(300);
        alert('This is finished!!!!');
      });
    });
    
    return $(this);
  };
}(jQuery));
