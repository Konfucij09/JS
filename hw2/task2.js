//Задача 1.

var X = parseInt(prompt('X='));
var Y= parseInt(prompt('Y='));
var min = parseInt;

if  (X > Y) {
	min = Y;
	Y = X;
	X = min;
}

alert ('В Х хранится наименьшее число  ' + X);

//Задача 2.

var Ax = parseInt(prompt('Введите координаты вершины А по оси Ох'));
var Ay = parseInt(prompt('Введите координаты вершины А по оси Оy'));
var Az = parseInt(prompt('Введите координаты вершины А по оси Оz'));
var Bx = parseInt(prompt('Введите координаты вершины B по оси Ох'));
var By = parseInt(prompt('Введите координаты вершины B по оси Оy'));
var Bz = parseInt(prompt('Введите координаты вершины B по оси Оz'));
var Cx = parseInt(prompt('Введите координаты вершины C по оси Ох'));
var Cy = parseInt(prompt('Введите координаты вершины C по оси Оy'));
var Cz = parseInt(prompt('Введите координаты вершины C по оси Оz'));
var kvAB = ((Bx - Ax)*(Bx - Ax) + (By - Ay)*(By - Ay) + (Bz - Az)*(Bz - Az));
var kvBC = ((Cx - Bx)*(Cx - Bx) + (Cy - By)*(Cy - By) + (Cz - Bz)*(Cz - Bz));
var kvCA = ((Ax - Cx)*(Ax - Cx) + (Ay - Cy)*(Ay - Cy) + (Az - Cz)*(Az - Cz));

if (kvAB == (kvBC+kvCA) || kvBC == (kvAB+kvCA) || kvCA == (kvAB+kvBC)) {
	alert('Этот треугольник прямоугольный');
}
else {
	alert('Не прямоугольный');
}


//Задача 3.

var month = prompt('Введите номер соответствующий месяцу:\n1-январь;\n2-февраль;\n3-март;\n4-апрель;\n5-май;\n6-июнь;\n7-июль;\n8-август;\n9-сентябрь;\n10-октябрь;\n11-ноябрь;\n12-декабрь.');

switch(month){
	case '1':
	case '2':
	case '12':
		alert('Зима');
		break;
	case '3':
	case '4':
	case '5':
		alert('Весна');
		break;
	case '6':
	case '7':
	case '8':
		alert('Лето');
		break;
	case '9':
	case '10':
	case '11':
		alert('Осень');
		break;
	default:
		alert('Нучись месяц выбирать!!!');
}



//Задача 4.

var L = parseInt(prompt('Введите числовое значение длины отрезка'))
var menu = prompt('Введите номер соответствующий единице измерения заданного отрезка:\n1-дециметр;\n2-километр;\n3-метр;\n4-миллиметр;\n5-сантиметр.');

switch(menu){
	case '1':
		L=L/10;
		alert('Заданный отрезок в метрах будет = ' +L);
		break;
	case '2':
		L=1000*L;
		alert('Заданный отрезок в метрах будет = ' +L);
		break;
	case '3':
		alert('Заданный отрезок в метрах будет = ' +L);
		break;
	case '4':
		L=L/1000;
		alert('Заданный отрезок в метрах будет = ' +L);
		break;
	case '5':
		L=L/100; 
		alert('Заданный отрезок в метрах будет = ' +L);
		break;

	default:
		alert('Ошибка!');
}

//Задача 5.

var str = prompt('введите строку для проверки на палиндромность ');
var str2 = str.replace(/\s*/g,'');
var newstr = str2.split('').reverse().join('');
if(str2 ===newstr){
	//alert('Это палиндром');
} else {
	alert('Это не палиндром');
}

//Задача 6.

var year = parseInt(prompt('Введите год нашей эры'));
if ((year % 100 ===0) && (year % 400 !== 0)){
	alert('невисокосный');
} else if (yaer % 4 === 0) {
	alert('високосный');
} else {
	alert('невисокосный');
}


//Задача 7.

var plate = parseInt(prompt('Введите количество тарелок для мытья'));
var soap = parseFloat(prompt('Введите количество моющего средства в литрах: '));

while (true) {
	plate -= 1;
	soap -= 0.5;
if (soap % 0.5 != 0) {
		alert('Введие количество моющего средства кратное 0.5');
		break;
} if (soap < 0 || plate < 0) {
	alert('Введите корректное значение');
	break;
} if (soap === 0 && plate > 0) {
	alert('Моющее средство закончилось. Осталось ' + plate + ' тарелок (ки)');
	break;
}  if (soap > 0 && plate === 0) {
	alert ('Все тарелки вымыты. Осталось ' + soap.toFixed(1) + ' моющего средства');
	break;
}  if (soap === 0 && plate === 0) {
	alert('Все тарелки вымыты, моющее средство закончилось');
	break;
}
}

