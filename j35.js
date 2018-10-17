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
{       K=parseFloat($('tx3').value);
	N=parseFloat($('tx1').value);
K=0
while(K*K<N)
{K=K+1;
}
if(K*K>N)
{K=K-1;
}
$('tx3').value=''+K;
}