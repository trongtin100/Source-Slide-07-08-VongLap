let tin, i , j;
tin = "<table border='1' width='600' cellspacing='0' cellpadding='3'>";
i =  2, j = 1;
while (j < 11 ) {
    tin=tin + "<tr>";
    while (i<10) {
        tin = tin + "<td>"+ i + "x" + j + "= " + i * j + "</td>";
        i++;
    }
    tin = tin + "</tr>";
    i = 2;
    j++;
}
tin = tin + "</table>";
document.write(tin)