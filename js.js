
var numbers = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8], x;
var k=0, y=0;
var j=numbers.length;
var Interval;

	let table = document.createElement('table'), tr, td, row, cell;

	for (row = 0; row < 4; row++) {
		tr = document.createElement('tr');
		for (cell = 0; cell < 4; cell++) {
			td = document.createElement('td');
			tr.appendChild(td);
            let rand = Math.floor(Math.random() * j);
			td.setAttribute("count", numbers[rand]);
			td.classList.add('white')
			tr.appendChild(td);       		

			numbers.splice (rand,1);
			j=j-1;
		}
		
	table.appendChild(tr);
	}
	

document.getElementById('container').appendChild(table);



function myTimer ()
{
	var d = ':';
	var p = 60;
	var z = function (x) {return (((x < 10) ? '0' : '') + x)};
	 
	var sb = document.getElementById ('time');
	var H = sb.innerHTML.split (d);
	 
	var t = parseInt (H[0]) * p * p + parseInt (H[1]) * p + parseInt (H[2]) + 1;
	sb.innerHTML = [z (Math.floor (t / p / p)),
	                   z (Math.floor (t % (p * p) / p)), 
	                   z (t % (p* p) % p)].join (d);
	sb.wrk = setTimeout (myTimer, 1000);
}
 
onload = function ()
	{
		var checkstart=false;
		document.getElementById ('buttonClick').onclick = function ()
   {
	   var sb = document.getElementById ('time');
	   if (!checkstart) {sb.innerHTML = '00:00:00';sb.wrk = setTimeout (myTimer, 1000);
	   var check = false, selcolor = 0, sela, open = 0, timer, a = document.getElementsByTagName('td');
	   for(var i = 0; i < a.length; i++)
	{	
		a[i].addEventListener('click', function(e)
	{
		var el = e.target;
    	if (el.className.indexOf('white') > -1)
        {
        	x = el.getAttribute('count');
        	if  (x==1)  
            	{
					this.classList.add('red');
					this.classList.remove('white');
				}
				
			if  (x==2) 
		    	{
					this.classList.add('green');
					this.classList.remove('white');
				}
				
			if  (x==3) 
		    	{
					this.classList.add('pink');
					this.classList.remove('white');
				}
			
			if  (x==4) 
		    	{
					this.classList.add('blue');
					this.classList.remove('white');
				}
				
			if  (x==5) 
				{
					this.classList.add('yellow');
					this.classList.remove('white');
				}
				
			if  (x==6) 
				{
					this.classList.add('black');
					this.classList.remove('white');
				}
			
			if  (x==7) 
				{
					this.classList.add('grey');
					this.classList.remove('white');
				}
			if  (x==8) 
				{
					this.classList.add('orange');
					this.classList.remove('white');
				}

        	setTimeout(function()
            	{
            	//если кликнули на вторую картинку в паре
	            	if(check)
	            		{
	                	check = false;
		                //если цвета совпали
		                if(el.getAttribute('count') == selcolor)
		                    {
		                    open++;
		                    //если количество совпадений = максимально возможному
		                    if (open == 8)
		                    	{
		                    alert('Вы выиграли!' + 'Затраченное время: ' + time.innerHTML);
                            var sb = document.getElementById ('time');
		                    clearTimeout (sb.wrk);
		                    sb.wrk = 0;
		                    }
		                    }
		                else
		                    {
		                        //если цвета не совпали, то прячем блок
		                       sela.classList.add('white');
		                       el.classList.add('white');
		                    }
		                }
		            else
		            	{
		                    //если кликнули на первую картинку в паре
		                    selcolor = el.getAttribute('count'); sela = el; check = true;
		                }
	                //таймаут чтобы видеть цвет кликнутого блока
	            }, 250);
        }
    });
}
checkstart=true;
   }
   }
}

 
