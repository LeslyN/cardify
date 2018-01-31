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

(function($) {
  $.fn.cardify = function() {
    let $containerImages = $('container');
    let $images = $('img');

    if ($containerImages) {
      debugger;
      $images.addClass('opacity');
      $images.wrap('<figure></figure>');
      let $textAlt = $images.map(el => $images[el].alt);
      $textAlt.each(el => el.parent().append('<figcaption></figcaption>'));
      $('<figcaption></figcaption>').parent().append($images);
      console.log($images.next().text(textAlt));
      alert('sdasd');
    } else {
      console.log('No se encontró un contenedor');
    }
    
    $images.on('mouseover', () => {
      $images.hide();
      $textAlt.show();
      // centrar
      $textAlt.css(); 
    });

    $images.on('mouseout', () => {
      $images.show();
      $textAlt.hide();
    });
    return this;
  };
}(jQuery));