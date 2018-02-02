// Cardify
// Función autoejecutable
(function(obj) {
  $.fn.cardify = function() {
    let $listOfImages = $('img'); 
    let $containerImages = $('container');
    $listOfImages.each(function() {
      // Evento que se ejecuta cuando el mouse está encima de la imagen
      if ($containerImages) {
        $(this).on('mouseover', () => {
          let $textAlt = $(this).attr('alt');
          let $figure = $('<figure></figure>');
          $(this).wrap($figure).parent();
          let $figcaption = $('<figcaption></figcaption>');
          $figcaption.addClass('figcaption-position');
          $(this).parent().append($figcaption);
          $figcaption.show();
          console.log($(this).next().text($textAlt));
        });
      }
    });

    $(this).each(function() {
      // Evento que se ejecuta cuando el mouse deja de estar encima de la imagen
      let $mouseout = $(this).on('mouseout', () => {
        $(this).unwrap('figure');
        $(this).next().hide();
        // alert('This is finished!!!!');
      });
    });
    
    return $(this);
  };
}(jQuery));
