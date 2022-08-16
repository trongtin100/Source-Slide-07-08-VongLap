var tin=parseInt(prompt("So Nguyen To la: "));
var check=true;
let i =2

for ( i =2; i<tin-1; i++) {
    if ( tin % i == 0) {
        check=false;
        break;
    }
} if (check==true){
    alert("day So Nguyen To: ");
} else {
    alert("Khong phai so nguyen to");
}
