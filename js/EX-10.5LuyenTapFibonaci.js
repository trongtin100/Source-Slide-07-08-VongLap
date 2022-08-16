var number1=1;
var number2=1;
var number3; sout="";
var s = null
for (var i=2; i<= 20; i++){
    number3=number1+number2;
    number1=number2;
    number2=number3;
    sout= sout + number3+"<br>";
    s += number3
    text="the number is" + s + "<br>";
}
document.write(s+1);
