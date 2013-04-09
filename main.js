window.onload = function(){
	
	for (i=1;  i<=100; i++){
		document.getElementById('a').innerHTML += i + (i%3==0 ? "Fizz" : "") + (i%5==0 ? "Buzz" : "") + "<br>" ; 
	}
	
}
