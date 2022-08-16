var j = null;
var i=1;
var sout="";
for ( i ; i <= 100 ; i++ ) {
    if (i % 15 == 0 ){
         j="fizzbuzz";
    }
     else if (i % 5 == 0){
         j="buzz";
    }
     else if (i % 3  == 0 ){
         j="jizz";
    } else
        j=i;
     sout= sout + j + ",";
}
document.write(sout);