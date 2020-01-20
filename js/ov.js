(function ($, Drupal) {
  Drupal.behaviors.robcosetupOverlay = {
    attach: function (context, settings) {
	$('.main-navigation-block .menu .dropdown', context).once('setupOverlay').each(function () {
        $(this).hover(function(event){
		
		var fc = $(this).parent();
		if($(this).length === 0) return;

		var sc = fc.parent();
		if(sc.length === 0) return;

		if(!($('.main-navigation-block').is(fc) || $('.main-navigation-block').is(sc))){
			if(sc.hasClass('.dropdown-menu') || fc.hasClass('.dropdown-menu'))  
				$('#dim-overlay').show();
			return;
		}

		if( $(this).find(".dropdown-menu").length !== 0 )
			$('#dim-overlay').show();
		else
			$('#dim-overlay').hide();

	},function(event){
		if(!$('.main-navigation-block').is(':hover'))
			$('#dim-overlay').hide();
	});
      });
    }
  };
})(jQuery, Drupal);

