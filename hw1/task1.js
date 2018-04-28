//Задача 1.

var x = parseInt(prompt('Введите первое число'));
var y = parseInt(prompt('Введите второе число'));
var z = parseInt(prompt('Введите третье число'));
var min = parseInt;
if (x <= y)  {
	min = x;
}
else {
	min = y;
}
if (z <= min) {
	min = z;
};
alert(min);

//Задача 2.

var number = parseInt(prompt("Введите число в диапозоне от -999 до 999"));

if ((number >= -999) && (number<=-100)) {
	alert ("Отрицательное трехзначное число");
}
else if ((number > -100) && (number<= -10)) {
	alert ("Отрицательное двухзначное число");
}
else if ((number > -10) && (number < 0)) {
	alert ("Отрицательное однозначное");
} 
 else if (number === 0) {
	alert ("Нулевое число");
} 
 else if ((number > 0 ) && (number < 10)) {
	alert ("Положительное однозначное число");
} 
 else if ((number >= 10) && (number <100)) {
	alert ("Положительное двухзначное число");
} 
 else if ((number >= 100) && (number<=999)) {
	alert ("Положительное трехзначное число");
} 
else {
	alert ("Не входит в диапозон");
};

//Задача 3.

var number=parseInt(prompt("Введите целое число от 0 до 9"));

if (number===0) {
	alert('ноль');
}
else if (number===1) {
	alert('один');
}
else if (number===2) {
	alert('два');
}
else if (number===3) {
	alert('три');
}
else if (number===4) {
	alert('четыре');
}
else if (number===5) {
	alert('пять');
}
else if (number===6) {
	alert('шесть');
}
else if (number===7) {
	alert('семь');
}
else if (number===8) {
	alert('восемь');
}
else if (number===9) {
	alert('девять');
}
else {
	alert ('Не входит в диапозон')
}

//Задача 4.
var mark=parseInt(prompt('Введите оценку от 1 до 5'))

if(mark===1){
	alert('Плохо');
}
else if (mark===2) {
	alert('Неудовлетворительно');
	}
else if (mark===3) {
	alert ('Удовлетворительно');
	}
else if (mark===4){
	alert('Хорошо')
	}
else if(mark===5){
	alert('Отлично');
	}
else {
	alert('Неверное значение');
}

//Задача 5.

var x = parseInt(prompt('Введите первое число'));
var y = parseInt(prompt('Введите второе число'));
var z = parseInt(prompt('Введите третье число'));

if ((x===y) || (x===z) ||(y===z)) {
	alert ('true');
}
else {
	alert('false');
}