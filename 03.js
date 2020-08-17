var number = +prompt('number');
for (var i = 0; i <= number; i++) {
    number % i == 0 ? number += i : '...';
    console.log(number);
}
