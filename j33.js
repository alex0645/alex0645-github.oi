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
	x=parseFloat($('tx1').value);
	n=parseFloat($('tx2').value);
	var x = x%(2*Math.PI);
	var x2 = -x*x;
	var s = 1;
	var i = 1;
	var cos = 1;
	if (n>=0 && n%1===0) 
	{
		
		while (i<(2*n))
		{
			s=(s*x2)/(i*(i+1));
			cos=cos+s;
			i=i+2;	
		}
		$('tx3').value='cos x = '+cos;
    }
	else
	{
		$('tx3').value='Error';
	}
   	
}