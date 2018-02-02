'use strict';

// Cardify
// Función autoejecutable
(function (obj) {
  $.fn.cardify = function () {
    var $listOfImages = $('img');
    var $containerImages = $('container');
    $listOfImages.each(function () {
      var _this = this;

      // Evento que se ejecuta cuando el mouse está encima de la imagen
      if ($containerImages) {
        $(this).on('mouseover', function () {
          var $textAlt = $(_this).attr('alt');
          var $figure = $('<figure></figure>');
          $(_this).wrap($figure).parent();
          var $figcaption = $('<figcaption></figcaption>');
          $figcaption.addClass('figcaption-position');
          $(_this).parent().append($figcaption);
          $figcaption.show();
          $(_this).next().text($textAlt);
        });
      }
    });

    $(this).each(function () {
      var _this2 = this;

      // Evento que se ejecuta cuando el mouse deja de estar encima de la imagen
      var $mouseout = $(this).on('mouseout', function () {
        $(_this2).unwrap('figure');
        $(_this2).next().hide();
        // alert('This is finished!!!!');
      });
    });

    return $(this);
  };
})(jQuery);