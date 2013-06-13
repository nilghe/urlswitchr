// Creator: Chris Nilghe - nilghe.com
// Date: 2013-02-07
//
// Last Edited By: Chris Nilghe - nilghe.com
// Last Edit Date: 2013-06-13
//
// <summary>
//  Code your production links and never change them in your application when testing in your development/qa environment
//  URLSwitchr will switch all your links when in the testing environment to match your development/QA domain you specify
//  It will leave the links alone when in production
//  This is designed for those that have full development/QA environments for all their applications and have to link to 
//  other applications within the same testing environment
//  Designed for non-relative urls
// </summary>
//
// <options>
//  devDomain: Your QA/Development Environment domain
//  devUrl: The development URL you wish to replace the produciton URL with
//  prodUrl: The production URL you wish to find to replace with devURL
// </options>

(function ($) {
    $.fn.urlswitchr = function (options) {

        //Settings
        var settings = $.extend({
            'devDomain': 'developmentDomain',
            'devUrl': 'developmentUrl',
            'prodUrl': 'productionUrl'
        }, options);

        return this.each(function () {

            var o = options;
            var currentDomain = document.URL;

            //Check if we are in the Development/QA Environment
            if (currentDomain.indexOf(o.devDomain) != -1 || currentDomain == 'localhost') {
                
                //Only change URLs that contain the produciton URL that will be switched to the development URL
                if (this.href.indexOf(o.prodUrl) != -1) {
                    
                    this.href = this.href.replace('://' + o.prodUrl, '://' + o.devUrl);
                
                }
            }
        });
    };
})(jQuery);

