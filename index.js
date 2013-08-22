var jquery = require("jquery");
var new_height = jquery(window).height() - jquery('header.site-header').height() ;

jquery('.splash').css("height",  new_height);

jquery('a[href*="#"]').click(function(event){

	//prevent the default action for the click event
	event.preventDefault();

	//get the full url - like mysitecom/index.htm#home
	var full_url = this.href;

	//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
	var parts = full_url.split("#");
	var trgt = parts[1];

	//get the top offset of the target anchor
	var target_offset = jquery("#"+trgt).offset();
	var target_top = target_offset.top;

	// jquery('.navbar li').removeClass('active');

	// jquery(this).addClass('active').parent().addClass('active');

	//goto that anchor by setting the body scroll top to anchor top
	jquery('html, body').animate({scrollTop:target_top}, 500);
});