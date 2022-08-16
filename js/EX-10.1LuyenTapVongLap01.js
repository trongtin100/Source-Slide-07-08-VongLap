var tin=parseInt(prompt("So dem la: "));
var i;
for (i=1; i<100;i++) {
    if (i==100) {
        break;
    }
    tin += "SoDemLa" + i + "";
} alert(tin)