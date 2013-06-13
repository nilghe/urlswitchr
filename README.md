URLSwitchr
==========

A small jQuery plugin that will switch all non-relative urls in an application page when in a testing/qa environment with the proper testing/qa environment domain. 

This is meant for non-relative URLS that point to other applications within your testing/qa environment. 

## Example
QA Environment URL:
  http://yourapp-qa

href tags within your application page
  <a href="http://companypayroll">Payroll</a>

Setting URLSwitchr to look for "-qa" in the URL will then switch the links to the specified testing/qa url

  <a href="http://companypayroll-qa">Payroll</a>

## Working Example
Look the following to see a working example
- /livesite/index.html
- /testsite/index.html

## Setup
- link to urlswitchr.js in your HTML

```html
<script src="urlswitchr.js"></script>
```

- Define the plugin on page load

```javascript
	$("a[href]").urlswitchr({
    	devDomain: 'testsite',
    	devUrl: 'dev.yoursite',
    	prodUrl: 'yoursite'
    });
```

devDomain
- Your QA/Development Environment domain

devURL
- The development URL you wish to replace the produciton URL with

prodUrl 
- The production URL you wish to find to replace with devURL

## Limitations
You will have to setup multiple definitions in your jQuery file if you wish replace multiple urls that match different domains.