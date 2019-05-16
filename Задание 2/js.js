let word = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

var res = ''
function check() {



	let ced = document.getElementById('moveHorse').value; //получение данных из формы moveHorse
	a = ced.split(''); // строка разбирается в массив. символ в элемент массива
	z = a[0].toUpperCase(); // строка z кладем первый эл-т из массива а, так как там должна лежать букв. координата + изменяем регистр на верхний
	y = word.indexOf(z); // присваиваем индекс элемента из массива word совпадающего со значением переменной z
	x = Number(a[1]); // присваиваем число из массива а
	console.log(a,' ',x,' ',z,' ',y);

if ((a[1]<=8) && (a[1]>=1) && ( ((a[0].charCodeAt(0)>=65) && (a[0].charCodeAt(0)<=72)) || ((a[0].charCodeAt(0)>=97) && (a[0].charCodeAt(0)<=104)) ))
{


x1 = x + 1;
x2 = x - 1;
x3 = x + 2;
x4 = x - 2;
y1 = y + 1;
y2 = y - 1;
y3 = y + 2;
y4 = y - 2;



if (y3 >= 0 && y3 <= 7) {

	if (x1 >= 1 && x1 <= 8) {
		// вывод координаты (x1, word[y3])
		res = res + word[y3] + x1 + " " ;
    }
    if (x2 >= 1 && x2 <= 8) {
    	//вывод координаты (x2, y3)
    	res = res + word[y3] + x2 + " " ;
    }
}
if (y4 >= 0 && y4 <= 7) {
	if (x1 >= 1 && x1 <= 8){
		// вывод координаты (x1, y4)
		res = res + word[y4] + x1 + " " ;
	}
	if (x2 >= 1 && x2 <= 8){
		// вывод координаты (x2, y4)
		res = res + word[y4] + x2 + " " ;
	}
}
if (x3 >= 1 && x3 <= 8) {
	if (y1 >= 0 && y1 <= 7) {
		//вывод координаты (x3, y1)
		res = res + word[y1] + x3 + " " ;
	}
	if (y2 >= 0 && y2 <= 7) {
		// вывод координаты (x3, y2)
		res = res + word[y2] + x3 + " " ;
	}
}
if (x4 >= 1 && x4 <= 8){
	if (y1 >= 0 && y1 <= 7) {
		// вывод координаты (x4, y1)
		res = res + word[y1] + x4 + " " ;
	}
	if (y2 >= 0 && x2 <= 7) {
		//вывод координаты (x4, y2)
		res = res + word[y2] + x4 + " " ;
	}
}
	
}
document.getElementById('result').innerHTML = res;
	res = '';
}
