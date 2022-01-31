'use strict';
// Timer

var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
		var t = time_remaining(endtime);
		clock.innerHTML = 'minutes: '+t.minutes+'<br>seconds: '+t.seconds;
		if(t.total<=0){ clearInterval(timeinterval); 
			document.querySelector('.message').textContent = 'Time Up!';
			document.querySelector('.circle').style.display = 'block';

			document.querySelector('.left').style.transform = 'translateX(0%)';
		document.querySelector('.left').style.transition = '1s';
		document.querySelector('.right').style.transform = 'translateX(0%)';
		document.querySelector('.right').style.transition = '1s';
		
		}
	}
	update_clock(); // run function once at first to avoid delay
	var timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);


const password = document.getElementById("pwd").value = "abcxyz";
document.querySelector('#pwd').textContent = password;
document.querySelector('.enter').addEventListener('click', function() {
	const pwd = (document.querySelector('#pwd').value);

	// when there is no input
	if(!pwd) {
		document.querySelector('.error').textContent = 'No input!';

		//when password is correct
	} else if (pwd === password) {
		document.querySelector('.error').textContent = 'Welcome!';

		document.querySelector('.left').style.transform = 'translateX(-100%)';
		document.querySelector('.left').style.transition = '1s';
		document.querySelector('.right').style.transform = 'translateX(100%)';
		document.querySelector('.right').style.transition = '1s';
		
		document.querySelector('.circle').style.transform = 'rotate(360deg)';
		document.querySelector('.circle').style.transition = '1s';
		setTimeout(function(){
			document.querySelector('.circle').style.display = 'none';
		}, 1000);

		//when password is wrong
	} else if (pwd !== password) {
		document.querySelector('.error').textContent = 'Wrong Password!';
	}


});