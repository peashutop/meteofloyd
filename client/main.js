// Add A way to target container per page based on CSS
Handlebars.registerHelper("containerClass", function(){
	return window.location.pathname.split('/')[1];	
});

// Global Username Data to be used site wide
Handlebars.registerHelper('loggedinUser', function () {
    var user = Meteor.users.findOne({}, {fields: {profile : 1, username : 1}});
    return user.username;
});