var a = +prompt('1 number');
var b = +prompt('2 number');
while (a != 0 && b != 0) {
    if (a > b) {
        a = a % b;
    }
    else {
        b = b % a;
    }
}
;
alert(a + b);
