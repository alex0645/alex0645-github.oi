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
	N=parseFloat($('tx2').value);
	S=1; xx=1; p=1; x=-x*x;
for(i=2;i<=2*N;i=i+2)
{
xx=xx*x;
p=p*i*(i-1);
S=S+xx/p;
}
		$('tx3').value='cos x = '+S;
    }
	
   	
