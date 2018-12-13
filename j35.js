function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }

function f2()
{       K=parseFloat($('tx2').value);
	N=parseFloat($('tx1').value);
S=1;
for(i=2;i<=N;i++)
{a=i;
a=Math.pow(a,K); 
S=S+a;
}
$('tx3').value=''+S;
}

function f3()
{       A=parseFloat($('tx4').value);
	B=parseFloat($('tx5').value);
result='';
	for(var i=A; i<=B; i++)
	
{
		
for(var j=1; j<= i; j++)

			result=result+i;
	
}
	
$('tx6').value=result;

}
