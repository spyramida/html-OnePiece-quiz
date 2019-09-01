<canvas id="ctx" style = 'position: absolute; left: 0px; top: 0px;' width="1000" height="500" style="border:1px solid #000000;"> </canvas>

var month = 11;
var day = 21;
var hour = 5;
var da_date;
var ma_time;
var hours_to;
var days_to;
var ctx = document.getElementById("ctx").getContext("2d");
var clock = new Image();
clock.src = 'images/clock-style.jpg';

setInterval(main,50);

calclulate = function(){
	
}

main = function(){
	da_date = new Date();
	ma_time = da_date.getTime();
	
	
	calculate();//ypologizei poses meres-mhnes-wres exoume gia to next
	ctx.fillText
	//emfanizei
	
}