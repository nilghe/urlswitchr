$(document).ready(function () {

	/* Set URLS to be relative to the server this is being ran on. 
	 * URLS are changed to dev/qa urls */
	$("a[href]").urlswitchr({
    	devDomain: 'testsite',
    	devUrl: 'dev.yoursite',
    	prodUrl: 'yoursite'
    });

});
