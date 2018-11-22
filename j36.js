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
	n = parseFloat($('tx1').value);
	k = parseFloat($('tx2').value);
	i = 1;
	c = 0;
	if (n>=0 && n%1===0 && k>=0 && k%1===0) 
	{
		while (i<=n)
		{
			j=Math.pow(i,k);
			c=c+j;
			i++;	
		}
		$('tx3').value=+c;
    }
	else
	{
		$('tx3').value='Error';
	}
}