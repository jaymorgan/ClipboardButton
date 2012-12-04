/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ico\'">' + entity + '</span>' + html;
	}
	var icons = {
			'ico-home' : '&#x21;',
			'ico-book' : '&#x22;',
			'ico-file' : '&#x23;',
			'ico-new' : '&#x24;',
			'ico-copy' : '&#x25;',
			'ico-folder' : '&#x26;',
			'ico-folder-2' : '&#x27;',
			'ico-broadcast' : '&#x28;',
			'ico-clock' : '&#x29;',
			'ico-calendar' : '&#x2a;',
			'ico-cabinet' : '&#x2b;',
			'ico-drawer' : '&#x2c;',
			'ico-drawer-2' : '&#x2d;',
			'ico-box' : '&#x2e;',
			'ico-box-add' : '&#x2f;',
			'ico-box-remove' : '&#x30;',
			'ico-download' : '&#x31;',
			'ico-upload' : '&#x32;',
			'ico-mail' : '&#x33;',
			'ico-phone' : '&#x34;',
			'ico-user' : '&#x35;',
			'ico-comments' : '&#x36;',
			'ico-comments-2' : '&#x37;',
			'ico-undo' : '&#x38;',
			'ico-cog' : '&#x39;',
			'ico-link' : '&#x3a;',
			'ico-thumbs-up' : '&#x3b;',
			'ico-thumbs-down' : '&#x3c;',
			'ico-happy' : '&#x3d;',
			'ico-smiley' : '&#x3e;',
			'ico-neutral' : '&#x3f;',
			'ico-arrow-up' : '&#x40;',
			'ico-arrow-right' : '&#x41;',
			'ico-arrow-down' : '&#x42;',
			'ico-arrow-left' : '&#x43;',
			'ico-github' : '&#x44;',
			'ico-forrst' : '&#x45;',
			'ico-dribbble' : '&#x46;',
			'ico-google-plus' : '&#x47;',
			'ico-mail-2' : '&#x48;',
			'ico-linkedin' : '&#x49;',
			'ico-tumblr' : '&#x4a;',
			'ico-github-2' : '&#x4b;',
			'ico-github-3' : '&#x4c;',
			'ico-github-4' : '&#x4d;',
			'ico-github-5' : '&#x4e;',
			'ico-github-6' : '&#x4f;',
			'ico-forrst-2' : '&#x50;',
			'ico-tumblr-2' : '&#x51;',
			'ico-linkedin-2' : '&#x52;',
			'ico-mail-3' : '&#x53;',
			'ico-mail-4' : '&#x54;',
			'ico-google-plus-2' : '&#x55;',
			'ico-google-plus-3' : '&#x56;',
			'ico-gplus' : '&#x57;',
			'ico-twitter' : '&#x58;',
			'ico-twitter-2' : '&#x59;',
			'ico-twitter-3' : '&#x5a;',
			'ico-chrome' : '&#x5b;',
			'ico-html5' : '&#x5c;',
			'ico-html5-2' : '&#x5d;',
			'ico-css3' : '&#x5e;',
			'ico-firefox' : '&#x5f;',
			'ico-IE' : '&#x60;',
			'ico-opera' : '&#x61;',
			'ico-safari' : '&#x62;',
			'ico-IcoMoon' : '&#x63;',
			'ico-sunrise' : '&#x64;',
			'ico-sun' : '&#x65;',
			'ico-moon' : '&#x66;',
			'ico-sun-2' : '&#x67;',
			'ico-windy' : '&#x68;',
			'ico-wind' : '&#x69;',
			'ico-snowflake' : '&#x6a;',
			'ico-cloudy' : '&#x6b;',
			'ico-cloud' : '&#x6c;',
			'ico-weather' : '&#x6d;',
			'ico-weather-2' : '&#x6e;',
			'ico-weather-3' : '&#x6f;',
			'ico-lines' : '&#x70;',
			'ico-cloud-2' : '&#x71;',
			'ico-lightning' : '&#x72;',
			'ico-cloudy-2' : '&#x73;',
			'ico-compass' : '&#x74;',
			'ico-moon-2' : '&#x75;',
			'ico-thermometer' : '&#x76;',
			'ico-sun-3' : '&#x77;',
			'ico-lightning-2' : '&#x78;',
			'ico-lightning-3' : '&#x79;',
			'ico-cloudy-3' : '&#x7a;',
			'ico-cloud-3' : '&#x7b;',
			'ico-cloudy-4' : '&#x7c;',
			'ico-weather-4' : '&#x7d;',
			'ico-snowy' : '&#x7e;',
			'ico-snowy-2' : '&#xe000;',
			'ico-snowy-3' : '&#xe001;',
			'ico-windy-2' : '&#xe002;',
			'ico-windy-3' : '&#xe003;',
			'ico-rainy' : '&#xe004;',
			'ico-lightning-4' : '&#xe005;',
			'ico-rainy-2' : '&#xe006;',
			'ico-cloud-4' : '&#xe007;',
			'ico-cloud-5' : '&#xe008;',
			'ico-lightning-5' : '&#xe009;',
			'ico-rainy-3' : '&#xe00a;',
			'ico-rainy-4' : '&#xe00b;',
			'ico-windy-4' : '&#xe00c;',
			'ico-windy-5' : '&#xe00d;',
			'ico-snowy-4' : '&#xe00e;',
			'ico-snowy-5' : '&#xe00f;',
			'ico-weather-5' : '&#xe010;',
			'ico-cube' : '&#xe011;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/ico-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};