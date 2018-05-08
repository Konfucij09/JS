//Задача 1.
var str = prompt('Введите целое число');
var i = 0;
var sum = 0;
while (i < str.length) {
	sum = sum + parseInt(str[i]);
	i++;
}
alert(sum);



//Задача 2.

var s = 'Cucumber';
var str;
str = s.replace(/c/gi,'cc');
alert(str);

//Задача 3.
var pass = prompt('Введите пароль:');
var i = 0;
while(i < 4) {

if (pass.length < 9) {
	alert('Ошибка. Длина пароля должна быть более 9 символов');
} else if (pass.match(/(?=.[A-Z])(?=.[a-z])/g) === null) {
	alert('Ошибка. Пароль должен содержать латинские буквы верхнего и нижнего регистра');
} else if (pass.match(/(.*\d){3}/g) === null) {
	alert('Ошибка пароль должен содержать более 2 цифр');
} else if (pass.match(/.*[!$#%]/g) === null) {
	alert('Пароль должен содержать хотя бы 1 неалфавитный символ');
} else {
	alert('Try again');
}
pass = prompt('Enter password once again');
i++;
}



