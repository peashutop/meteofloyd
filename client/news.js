Template.news.twitterWidget = function(){

  contents = new TWTR.Widget({
	     version: 2,
	     type: 'search',
	     search: '#floyding',
	     interval: 6000,
	     title: '',
	     subject: 'use #floyding to post updates here',
	     //width: 250,
	     //height: 300,
	     width: 325,
	     height: 364,
	     theme: {
	       shell: {
	         background: '#8ec1da',
	         color: '#ffffff'
	       },
	       tweets: {
	         background: '#ffffff',
	         color: '#444444',
	         links: '#1985b5'
	       }
	     },
	     features: {
	       scrollbar: true,
	       loop: false,
	       live: true,
	       hashtags: true,
	       timestamp: true,
	       avatars: true,
	       toptweets: false,
	       behavior: 'all'
	     }
	   }).render().start();

   $('#twitter-widget').html(contents);
};