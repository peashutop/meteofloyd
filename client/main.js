// Add A way to target container per page based on CSS
Handlebars.registerHelper("containerClass", function(){
	return window.location.pathname.split('/')[1];	
});