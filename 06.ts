do {
    let num1 = +prompt('введите число 1');
    let num2 = +prompt('введите число 2');
    let sign = prompt('введите символ');
    let result = 0;

    switch (sign) {
        case '+':
            result = num1 + num2;
            alert(result);
            break;

        case '-':
            result = num1 - num2;
            alert(result);
            break;

        case '*':
            result = num1 * num2;
            alert(result);
            break;

        case '/':
            result = num1 / num2;
            alert(result);
            break;
    
        default:
            alert('Нет такого символа.')
            break;
    }
} while (confirm('Хотите еще раз решить ?'));