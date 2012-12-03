ClipboardButton
===============

A simple button to add data to your clipboard on click, works through FlashVars in the Object tag in the HTML.

You can see in the Source, there is a param set in the Object tag for FlashVars and the value is `fvars=@jaymorgan`. "@jaymorgan" is the string that is passed into the flash file and sent to the CLipboard when the button is pushed. This will work locally and on the web.

Just change the value of this parameter `<param name="FlashVars" value="fvars=@jaymorgan" />`. Don't change the `fvars=`.

## Files
	copybutton.fla
	CopyButton.as
	copybutton.html
	copybutton.swf

## Demo
[http://jmorgan.ws/clipboardButton/](http://jmorgan.ws/github/clipboardButton/copybutton.html)

## Coming Soon
Don't use the `<object>` tag, This is just a placeholder, if anyone can spit me out a good version of an embed and object tag that I can use, send it over and I will roll it in.
