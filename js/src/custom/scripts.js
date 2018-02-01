// This file is to show how 'app.js' is for importing all of the Foundation-specific files
// 'scripts.js' is a placehold file for any other script files
// 'scripts.js' is minified via codekit, not via 'npm run build'
// when 'npm run build' is executed, 'scripts-min.js' is simply copied over and not processed in any way

$(document).ready(function() {
	
	$('.gallery').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
});

new WOW().init();