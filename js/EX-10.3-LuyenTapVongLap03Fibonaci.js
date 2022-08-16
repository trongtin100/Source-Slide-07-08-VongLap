
var number1=1;
var number2=1;
var number3; sout="";
for (var i=1; i<= 20; i++){
    number3=number1+number2;
    number1=number2;
    number2=number3;
    sout= sout + number3+"<br>";
}
document.write(sout);
