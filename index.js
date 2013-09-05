
var new_height = jQuery(window).height() - 127 ;

jQuery(window).ready(function() {


	jQuery('.carousel').carousel({interval: 3000})


	jQuery('.splash').css("height",  new_height);

	jQuery('header#site-header-primary').clone().prependTo('.page').removeAttr("id").addClass('site-header-secondary');

	jQuery('a[href*="#"]').click(function(event){

		//prevent the default action for the click event
		event.preventDefault();

		//get the full url - like mysitecom/index.htm#home
		var full_url = this.href;

		//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
		var parts = full_url.split("#");
		var trgt = parts[1];

		//get the top offset of the target anchor
		var target_offset = jQuery("#"+trgt).offset();
		var target_top = target_offset.top;

		// jQuery('.navbar li').removeClass('active');

		// jQuery(this).addClass('active').parent().addClass('active');

		//goto that anchor by setting the body scroll top to anchor top
		jQuery('html, body').animate({scrollTop:target_top}, 500);
	});

	jQuery('header.site-header a').click(function(event){

		jQuery('header.site-header a').removeClass('current');
		jQuery(this).addClass('current');

	});

});

jQuery(document).scroll(function() {
  if (jQuery(document).scrollTop() >= new_height) {

  		console.log('show');
		
		jQuery(".site-header-secondary").removeClass("hide-header").addClass("show-header");

  } else {

  		console.log('hide');

		jQuery(".site-header-secondary").addClass("hide-header");

  }
});