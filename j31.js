function $() 
{
var elements = new Array();
for (var i = 0; i < arguments.length; i++)
{var element = arguments[i];
if (typeof element == 'string')
element = document.getElementById(element);
if (arguments.length == 1)
return element;
elements.push(element);
}
return elements;}


function f1()
{
	a=parseFloat($('tx1').value);
	b=parseFloat($('tx2').value);
	c=parseFloat($('tx3').value);
	var x = 0;

	if (a>0) 
	{
		x=x+1;
	}
	
	if (b>0) 
	{
		x=x+1;
	}
	
	if (c>0)
	{
		x=x+1;
	}
	$('tx4').value=x;
}
