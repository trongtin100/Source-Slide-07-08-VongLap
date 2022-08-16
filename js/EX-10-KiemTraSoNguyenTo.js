var tin=parseInt(prompt("So Nguyen To la: "));
var sout = "";
let i =2;
var n=1
var count = 0;
for  ( n=1; n<=100; n++) {
    check=true
        for ( i =2; i<n-1; i++) {
            if ( n % i === 0) {
                check=false;
                break;
            }
        } if (check){
            sout += n +"<br>";
            count = count + 1;
            if (count>tin) {
                break;
            }

        }
}
document.write(sout)