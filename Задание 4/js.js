const word = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' '];
var k=0;

function drawChess() {
	let mainBlock = document.querySelector('.main-block'); //блок для добавления элементов
	let block; // блок, в который будут складываться созданные элементы.
	let flag = false; // для окрашивания квадратов доски

	for (let i = 0; i<10; i++) { //т.к. 10 клеток по вертикали и 10 клеток по горизонтали, запускаем с 0 
		 
		for(let n = 0; n < 10; n++) { //
			if (i==0 || i==9) {
		 	block = document.createElement('div'); // создание элемента div
		 	block.className = 'block red';
		 	block.innerHTML = word[n];
            mainBlock.appendChild(block);
		 }
		 else {
		 	if (n==0 || n==9) {
		 		block = document.createElement('div'); // создание элемента div
		 		block.className = 'block red';
		 		block.innerHTML = 9 - i;
            	mainBlock.appendChild(block);
		 	}
		 
		  	else {
			if (n == 1) 
				flag = !flag; // n-новая строчка. для перемены цвета с черного на белый и с белого не черный  (меняется порядок на обратный). == предполагает сравнение
			block = document.createElement('div'); // создание элемента div
			
			if (flag) 
				block.className = 'block white'; //для проверки черного цвета
			else 
				block.className = 'block black'; // в портивном случае будет белый
            k=k+1;
            block.setAttribute("count", k);
			mainBlock.appendChild(block); //для выведение элемента div используем переменную mainBlock и указываем, что мы хотим присоед-ть, т.е. block
			flag = !flag; // меняем цвета
                }
            }
        }
        
    }
    
    	
		document.querySelectorAll('.main-block .block[count]').forEach(function(element) {
	element.onclick = function (event) {
		document.querySelectorAll('.main-block .block').forEach(function(element) {
			element.classList.remove('active');


		});
		this.classList.add('active');


		var attibute = element.getAttribute("count");
var x = attibute % 8;
	if (x==0) {
		x = 8; //делаем самой правой
	}
	
var y = attibute/1;
var z = 0; //обнуляем переменную z

		if ((y >= 17) && (x >= 2)) {
				z =  y - 17; //с помощью z мы находим нужный блок
				document.querySelectorAll('.main-block .block[count="'+z+'"]').forEach(function(element) {
			 	element.classList.add('active');
			 });
			}
			 
		if ((x <= 6) && (y >= 9)) {
				z =  y - 6; //с помощью z мы находим нужный блок
				document.querySelectorAll('.main-block .block[count="'+z+'"]').forEach(function(element) {
			 	element.classList.add('active');
			 });
				}
		if ((y >= 17) && (x <= 7)) {
				z =  y - 15; //с помощью z мы находим нужный блок
				document.querySelectorAll('.main-block .block[count="'+z+'"]').forEach(function(element) {
			 	element.classList.add('active');
			 });
				}			
		if ((x <= 6) && (y <= 56)) {
				z =  y + Number(10) ; //с помощью z мы находим нужный блок
				document.querySelectorAll('.main-block .block[count="'+z+'"]').forEach(function(element) {
			 	element.classList.add('active');
			 });
				}
		if ((y <= 48) && (x <= 7)) {
				z =  y + 17; //с помощью z мы находим нужный блок
				document.querySelectorAll('.main-block .block[count="'+z+'"]').forEach(function(element) {
			 	element.classList.add('active');
			 });
				}
		if ((y <= 48) && (x >= 2)) {
				z =  y + 15; //с помощью z мы находим нужный блок
				document.querySelectorAll('.main-block .block[count="'+z+'"]').forEach(function(element) {
			 	element.classList.add('active');
			 });
				}
		if ((x >= 3) && (y <= 56)) {
				z =  y + 6; //с помощью z мы находим нужный блок
				document.querySelectorAll('.main-block .block[count="'+z+'"]').forEach(function(element) {
			 	element.classList.add('active');
			 });
				}
		if ((x >= 3) && (y >= 9)) {
				z =  y - 10; //с помощью z мы находим нужный блок
				document.querySelectorAll('.main-block .block[count="'+z+'"]').forEach(function(element) {
			 	element.classList.add('active');
			 });
				}


	}

});
}

drawChess();


