'use strict';

// Cardify
// Función autoejecutable
(function (obj) {
  $.fn.cardify = function () {
    var $listOfImages = $('img');
    $listOfImages.each(function () {
      var _this = this;

      $(this).one('mouseover', function () {
        $(_this).addClass('opacity');
        var $textAlt = $(_this).attr('alt');
        var $figure = $('<figure></figure>');
        $(_this).wrap($figure).parent();
        var $figcaption = $('<figcaption></figcaption>');
        $figcaption.addClass('figcaption-position');
        $(_this).parent().append($figcaption);
        console.log($(_this).next().text($textAlt));
      });
    });
    return $(this);
  };
})(jQuery);