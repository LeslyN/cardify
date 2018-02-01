'use strict';

// Código del plugin Cardify
// Función anónima autoejecutable
// (function($) {
//   // Heredando las caracterìsticas de jQuery al plugin creado
//   $.fn.extend({
//     // Nombre del plugin
//     cardify: function() {
//       const init = () => {
//         $(this).addClass('opacity');
//         let textAlt = $(this).attr('alt');
//         $(this).wrap('<figure></figure>').parent();
//         $(this).parent().append('<figcaption></figcaption>');
//         console.log($(this).next().text(textAlt));
//       };

//       let $images = $('img');
//       $images.each(() => {
//         $(this).one('mouseover', () => {
//           $(this).cardify();  
//           $(this).addClass('opacity');
//         });
//       });

//       $(this).one('mouseleave', () => {
//         // esconder el figcaption
//         $(this).removeClass('opacity');
//       });

//       return $(this).each(init);
//     }


//   });
// })(jQuery);

(function ($) {
  $.fn.cardify = function () {
    var $arrayOfImages = $('img');
    $arrayOfImages.each(function () {
      var $textAlt = $(this).attr('alt');
      $(this).wrap('<figure></figure>').parent();
      $(this).parent().append('<figcaption></figcaption>');
      console.log($(this).next().text($textAlt));
    });

    return $(this);
  };
})(jQuery);