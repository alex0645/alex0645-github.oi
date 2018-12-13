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

var today = new Date();
function f(x)
{
$("tx1").value=$("tx1").value+x;
}
function f1()
{
var newyear = new Date(2018,11,31);
t=newyear.getTime()-today.getTime();
$('tx2').value=parseInt(t/1000/60/60/24);
}
function f2()
{
var firstya = new Date(2018,00,1);
t=today.getTime()-firstya.getTime();
$('tx3').value=parseInt(t/1000/60/60/24);
}
function f3()
{
$('tx4').value=today.getDay();
b=parseFloat($('tx4').value);
switch(b)
{
case 1:
$('tx4').value='Понедельник'
break;
case 2:
$('tx4').value='Вторник'
break;
case 3:
$('tx4').value='Среда'
break;
case 4:
$('tx4').value='Четверг'
break;
case 5:
$('tx4').value='Пятница'
break;
case 6:
$('tx4').value='Суббота'
break;
case 0:
$('tx4').value='Воскресенье'
break;
}
}
function f4()
{
var today=new Date();
$('tx5').value=today.getDay();
a=parseFloat($('tx5').value);
switch(a)
{
case 1:
$('tx5').value='Понедельник'
break;
case 2:
$('tx5').value='Вторник'
break;
case 3:
$('tx5').value='Среда'
break;
case 4:
$('tx5').value='Четверг'
break;
case 5:
$('tx5').value='Пятница'
break;
case 6:
$('tx5').value='Суббота'
break;
case 0:
$('tx5').value='Воскресенье'
break;
}
}
function f5()
{
x=parseInt($('tx1').value);
today.setDate(x);
$('tx6').value=today;
$('tx1').value='';
}
function f6()
{
x=parseInt($('tx1').value);
today.setMonth(x);
$('tx6').value=today;
$('tx1').value='';
}
function f7()
{
x=parseInt($('tx1').value);
today.setYear(x);
$('tx6').value=today;
$('tx1').value='';
}
