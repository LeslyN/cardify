// Código del plugin Cardify

// Función anónima autoejecutable

(function(obj) {
  // Heredando las caracterìsticas de jQuery al plugin creado
  obj.fn.extend({
    // Nombre del plugin
    cardify: function() {
      function init() {
        let $arrayOfImages = $('img'); 
        $arrayOfImages.each(function() {
          alert('¡Funciona!');
        });
      }
      return $(this).each(init);
    }
  });
})(jQuery);