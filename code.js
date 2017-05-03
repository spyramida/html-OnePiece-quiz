var NUM_OF_ALL_QUESTIONS = 30;
var WIDTH = 1000;
var HEIGHT = 500;
var num_of_chars_in_line_title = 230/1000*window.innerWidth;
var num_of_chars_in_line_button = 27/1000*window.innerWidth;
var button_list = {};
var clicked_button = 0;
var question_num = -1;
var framecount = 0;
var fps = 16;
var time_left = 20;
var answer = 0 ;
var score = 0;
var button_width = 0;
var button_height = 0;
var button_x = 0;
var button_y = 0;
var fill_the_text_plus = 4/100*window.innerHeight;
var htmlCanvas = document.getElementById('ctx');
var image_flag = 0;
var level = 0;
var MAX_TIME_PER_QUESTION = 20;
var MIN_TIME_PER_QUESTION = 0.5 ; 
var tmp_date = new Date();
var start_time = tmp_date.getTime();
var curr_time = 20;
var random_num = -1;
var quote;
var NUM_OF_QUESTIONS_PER_QUIZ = 20;
var num_of_questions = -1;
var add_question = 0;
var poster_img = new Image();
var clock_x = 320;
var clock_y = 560;
var clock_cnt = 3;//clocks_per_row-clocks_on_last_row
var animation_time = 0.3;
var anime_clock_time = tmp_date.getTime();
var num_of_clock_frames = 61;
//var snd = new Audio("http://onepiece-planet.com/wp-content/uploads/2015/10/boom.wav"); 
var snd = new Audio("./music/boom.wav"); 
var wanted_poster_img_array = {};
var array_of_used_questions = {};
var my_resolution;
var resolution_array = {};

var sticky = new Image();
//sticky.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/sticky.png';
sticky.src = './images/sticky.png' ;

var board = new Image();
//board.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/board.png';
board.src = './images/board.png' ;

var wanted_poster_img = new Image();
//wanted_poster_img.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/wanted-poster1.png';
wanted_poster_img.src = './images/wanted-poster1.png' ;

var clock = new Image();

var butt_img = new Image();
//butt_img.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/Rounded_Button.gif';
butt_img.src = './images/Rounded_Button2.gif' ;

var butt_img2 = new Image();
//butt_img2.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/666.jpg';
butt_img2.src = './images/666.jpg' ;

var butt_img_light = new Image();
butt_img_light.src = './images/button_light.gif';
//butt_img_light.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/button_light.gif';

var back_img = new Image();
//back_img.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/background2.jpg';
back_img.src = './images/background2.jpg' ;



my_resolution = 0;
adjust_by_resolution = function(){
var ma_res = resolution_array[my_resolution];

if (ma_res.x === 1366 && ma_res.y === 768){
	button_width = 350;
	button_height = 80;
	button_x = 136;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 1920 && ma_res.y === 1080){
	button_width = 100;
	button_height = 100;
	button_x = 136;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 1280 && ma_res.y === 800){
	button_width = 300;
	button_height = 70;
	button_x = 9.5*window.innerWidth/100;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 1440 && ma_res.y === 900){
	button_width = 100;
	button_height = 100;
	button_x = 136;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 1280 && ma_res.y === 1024){
	button_width = 100;
	button_height = 100;
	button_x = 136;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 1600 && ma_res.y === 900){
	button_width = 100;
	button_height = 100;
	button_x = 136;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 768 && ma_res.y === 1024){
	button_width = 100;
	button_height = 100;
	button_x = 136;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 1024 && ma_res.y === 768){
	button_width = window.innerWidth/3;
	button_height = 70;
	button_x = 9.5*window.innerWidth/100;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 1680 && ma_res.y === 1050){
	button_width = 100;
	button_height = 100;
	button_x = 136;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 1920 && ma_res.y === 1200){
	button_width = 100;
	button_height = 100;
	button_x = 136;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 720 && ma_res.y === 1280){
	button_width = 100;
	button_height = 100;
	button_x = 136;
	button_y = 38/100*htmlCanvas.height;
	font_size = '20px Arial';
}
else if(ma_res.x === 360 && ma_res.y === 640){
	button_width = 120;
	button_height = 80;
	button_x = 9*window.innerWidth/100;
	button_y = 38/100*htmlCanvas.height;
	font_size = '13px Arial';
	fill_the_text_plus = 3/100*htmlCanvas.height;
	num_of_chars_in_line_button = 15;
}
else if(ma_res.x === 320 && ma_res.y === 568){
	button_width = 120;
	button_height = 80;
	button_x = 9*window.innerWidth/100;
	button_y = 38/100*htmlCanvas.height;
	font_size = '13px Arial';
	fill_the_text_plus = 3/100*htmlCanvas.height;
	num_of_chars_in_line_button = 15;
}
else if(ma_res.x === 320 && ma_res.y === 480){
	button_width = 120;
	button_height = 80;
	button_x = 9*window.innerWidth/100;
	button_y = 38/100*htmlCanvas.height;
	font_size = '13px Arial';
	fill_the_text_plus = 3/100*htmlCanvas.height;
	num_of_chars_in_line_button = 15;
}
console.log(ma_res.x+'x'+ma_res.y);
}
create_resolution = function(x,y){
	var entity = {
		x:x,
		y:y,
	};
	resolution_array[my_resolution] = entity;
	my_resolution++;
}
adjust_resolution = function(){
	htmlCanvas.width = window.innerWidth;
	htmlCanvas.height = window.innerHeight;
	var wid = window.innerWidth;
	var hei = window.innerHeight;
	var ma_res;
	var tmp_res = 0;
	var tmp_calc = 0;
	var calc = hei*wid;
	var check;
	for (var i=0; i<14; i++){
		ma_res = resolution_array[i];
		if (Math.abs(ma_res.x*ma_res.y - calc) < Math.abs(tmp_calc - calc)){
			tmp_res = i;
			tmp_calc = ma_res.x*ma_res.y;
		}
	}
	my_resolution = tmp_res;
	ma_res = resolution_array[tmp_res];
	
	check = Math.pow(wid-ma_res.x,2) + Math.pow(hei-ma_res.y,2);
	for (var i=tmp_res-3; i<=tmp_res+3; i++){
		if (i<0 || i>13 || i===tmp_res)
			continue;
		ma_res = resolution_array[i];
		if (check > (Math.pow(wid-ma_res.x,2) + Math.pow(hei-ma_res.y,2))){
			tmp_res = i;
			check = Math.pow(wid-ma_res.x,2) + Math.pow(hei-ma_res.y,2);
		}
	}
	my_resolution = tmp_res;
	
}
empty_array_of_used = function(){
	for (var i=0; i<NUM_OF_ALL_QUESTIONS; i++)
		array_of_used_questions[i] = 0;
}
put_coords_per_lvl = function(x,y,width,height){
	var object = {
		x:x,
		y:y,
		width:width,
		height:height,
	};
	
	return object;
}
choose_level = function(){
	make_starting_buttons(40/100*htmlCanvas.width,35/100*htmlCanvas.height,20/100*htmlCanvas.width,9/100*htmlCanvas.height);
	var entity = {
		question:'Choose difficulty :',
		ans1:'Soldier',
		ans2:'Captain',
		ans3:'Vice-admiral',
		ans4:'Admiral',
		};
	ctx.drawImage(back_img,0,0,htmlCanvas.width,htmlCanvas.height);
	draw2_quiz(entity);
	var quote_cnt = 1/NUM_OF_QUOTES;
	if (random_num === -1){
		random_num = Math.random();
		for (var i =0; i<NUM_OF_QUOTES; i++){
			if (random_num > quote_cnt*i)
					continue;
			else{	
				quote = quote_list[i];
				break;
			}
		}
	}
	if (!quote)
		quote = quote_list[0];
	ctx.globalAlpha = 0.8;
	ctx.font = 'italic '+ 20*htmlCanvas.width/1360+'px Papyrus';//Comic Sans MS,Papyrus,Brush Script MT
	ctx.fillStyle = 'white';
	fill_the_text2(quote,11*htmlCanvas.width/60,6*htmlCanvas.height/7,25,120*htmlCanvas.width/1360);
	if (answer != 0){
		empty_array_of_used();
		if (answer === 1){
			question_num = 0;
			level = 0;
			num_of_questions = 0;
			//poster_img.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/level1.png';
			poster_img.src = './images/level1.png';
			wanted_poster_img_array[0] = put_coords_per_lvl(0,0,300,307);
			wanted_poster_img_array[1] = put_coords_per_lvl(306,0,537,304);
			wanted_poster_img_array[2] = put_coords_per_lvl(847,0,299,302);
			wanted_poster_img_array[3] = put_coords_per_lvl(0,311,540,305);
			wanted_poster_img_array[4] = put_coords_per_lvl(545,313,511,286);
			wanted_poster_img_array[5] = put_coords_per_lvl(1063,313,511,286);
			}
		if (answer === 2){
			question_num = 30;
			level = 1;
			num_of_questions = 0;
			//poster_img.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/level2.png';
			poster_img.src = './images/level2.png';
			wanted_poster_img_array[0] = put_coords_per_lvl(0,0,519,308);
			wanted_poster_img_array[1] = put_coords_per_lvl(531,0,394,295);
			wanted_poster_img_array[2] = put_coords_per_lvl(938,0,510,285);
			wanted_poster_img_array[3] = put_coords_per_lvl(0,317,460,335);
			wanted_poster_img_array[4] = put_coords_per_lvl(483,318,459,321);
			wanted_poster_img_array[5] = put_coords_per_lvl(957,317,510,287);
			}
		if (answer === 3){
			question_num = 60;
			level = 2;
			num_of_questions = 0;
			//poster_img.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/level3.png';
			poster_img.src = './images/level3.png';
			wanted_poster_img_array[0] = put_coords_per_lvl(0,0,536,310);
			wanted_poster_img_array[1] = put_coords_per_lvl(558,0,638,356);
			wanted_poster_img_array[2] = put_coords_per_lvl(1223,0,575,341);
			wanted_poster_img_array[3] = put_coords_per_lvl(0,374,609,344);
			wanted_poster_img_array[4] = put_coords_per_lvl(647,393,641,282);
			wanted_poster_img_array[5] = put_coords_per_lvl(1314,377,637,358);
			}
		if (answer ===4){
			question_num = 90;
			level = 3;
			num_of_questions = 0;
			//poster_img.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/level4.png';
			poster_img.src = './images/level4.png';
			wanted_poster_img_array[0] = put_coords_per_lvl(0,0,498,244);
			wanted_poster_img_array[1] = put_coords_per_lvl(527,0,433,245);
			wanted_poster_img_array[2] = put_coords_per_lvl(938,0,556,286);
			wanted_poster_img_array[3] = put_coords_per_lvl(0,332,511,287);
			wanted_poster_img_array[4] = put_coords_per_lvl(533,333,489,263);
			wanted_poster_img_array[5] = put_coords_per_lvl(1047,334,744,238);
			}
			random_num = -1;
		answer = 0;
	}
}
bounty_calculator = function(){
	var ma_bounty = 0;
	var stations = 4;
	var analogia = NUM_OF_QUESTIONS_PER_QUIZ/stations;
	if (level === 0){
		if (score === 0)
			ma_bounty = 45;
		else if (score <= analogia)
			ma_bounty = score*(10000000)/stations;
		else if (score <= 2*analogia)
			ma_bounty = (score-analogia)*(20000000-10000000)/stations + 10000000;
		else if (score <= 3*analogia)
			ma_bounty = (score-2*analogia)*(30000000-20000000)/stations + 20000000;
		else if (score < 4*analogia)
			ma_bounty = (score-3*analogia)*(50000000-30000000)/stations + 30000000;
		else if (score === 4*analogia)
			ma_bounty = 80000000;
		}
	else if (level === 1){
		if (score === 0)
			ma_bounty = 10000000;
		else if (score <= analogia)
			ma_bounty = score*(30000000 - 10000000)/stations +10000000;
		else if (score <= 2*analogia)
			ma_bounty = (score-analogia)*(60000000-30000000)/stations + 30000000;
		else if (score <= 3*analogia)
			ma_bounty = (score-2*analogia)*(100000000-60000000)/stations + 60000000;
		else if (score < 4*analogia)
			ma_bounty = (score-3*analogia)*(150000000-100000000)/stations + 100000000;
		else if (score === 4*analogia)
			ma_bounty = 200000000;
		}
	else if (level === 2){
		if (score === 0)
			ma_bounty = 30000000;
		else if (score <= analogia)
			ma_bounty = score*(60000000 - 30000000)/stations +30000000;
		else if (score <= 2*analogia)
			ma_bounty = (score-analogia)*(120000000-60000000)/stations + 60000000;
		else if (score <= 3*analogia)
			ma_bounty = (score-2*analogia)*(200000000-120000000)/stations + 120000000;
		else if (score < 4*analogia)
			ma_bounty = (score-3*analogia)*(300000000-200000000)/stations + 200000000;
		else if (score === 4*analogia)
			ma_bounty = 400000000;
	}
	else if (level === 3){
		if (score === 0)
			ma_bounty = 60000000;
		else if (score <= analogia)
			ma_bounty = score*(100000000 - 60000000)/stations +60000000;
		else if (score <= 2*analogia)
			ma_bounty = (score-analogia)*(300000000-100000000)/stations + 100000000;
		else if (score <= 3*analogia)
			ma_bounty = (score-2*analogia)*(500000000-300000000)/stations + 300000000;
		else if (score < 4*analogia)
			ma_bounty = (score-3*analogia)*(800000000-500000000)/stations + 500000000;
		else if (score === 4*analogia)
			ma_bounty = 1200000000;
	}
	if (ma_bounty === 45){
		ctx.fillText('  45',32*htmlCanvas.width/100,72*htmlCanvas.height/100);
		return;
	}
	else if (ma_bounty === 1200000000){
		ctx.fillText('1 . 200 . 000 . 000',28*htmlCanvas.width/100,72*htmlCanvas.height/100);
		return;
	}
	ma_bounty = Math.round(ma_bounty/1000000);
	if (ma_bounty>1000){
		ctx.fillText('   . 000',38*htmlCanvas.width/100,72*htmlCanvas.height/100);
		ctx.fillText('   . 000',32*htmlCanvas.width/100,72*htmlCanvas.height/100);
		}
	else if (ma_bounty>=100){
		ctx.fillText('  . 000',38*htmlCanvas.width/100,72*htmlCanvas.height/100);
		ctx.fillText('  . 000',32*htmlCanvas.width/100,72*htmlCanvas.height/100);
	}
	else{
		ctx.fillText(' . 000',38*htmlCanvas.width/100,72*htmlCanvas.height/100);
		ctx.fillText(' . 000',32*htmlCanvas.width/100,72*htmlCanvas.height/100);
	}
	ctx.fillText(ma_bounty,29*htmlCanvas.width/100,72*htmlCanvas.height/100);
}
poster_on_board_animation = function(choice){
	var cropx = 377;
	var cropy = 1;
	var cropwid = 1;
	var crophei = 1;
	var x = 6;
	var y = 1;
	var width = 60;
	var height = 98;
	if (animation_time*1000/fps>= framecount ){
		cropx = cropx - (cropx-0)*framecount/(animation_time*1000/fps);
		cropy = cropy - (cropy-0)*framecount/(animation_time*1000/fps);
		cropwid = cropwid + (755-cropwid)*framecount/(animation_time*1000/fps);
		crophei = crophei + (1116-crophei)*framecount/(animation_time*1000/fps);
		x = x + (21-x)*framecount/(animation_time*1000/fps);
		y = y + (6-y)*framecount/(animation_time*1000/fps);
		width = width - (width-31.25)*framecount/(animation_time*1000/fps);
		height = height - (height-79)*framecount/(animation_time*1000/fps);
	}
	else {
		cropx = 0;
		cropy = 0;
		cropwid = 755;
		crophei = 1116;
		x = 21;
		y = 6;
		width = 29;
		height = 72;
	}
	ctx.drawImage(wanted_poster_img,cropx,cropy,cropwid,crophei,x*htmlCanvas.width/100,y*htmlCanvas.height/100,width*htmlCanvas.width/100,height*htmlCanvas.height/100);//teliko
	if (Math.round(animation_time*1000/fps) === framecount ){
		snd.volume = 0.4;
		snd.play();
	}
	else if (Math.round(animation_time*1000/fps) <= framecount ){
		var object = wanted_poster_img_array[choice];
		ctx.drawImage(poster_img,object.x,object.y,object.width,object.height,24.25*htmlCanvas.width/100,22.5*htmlCanvas.height/100,23*htmlCanvas.width/100,30*htmlCanvas.height/100);
		bounty_calculator();
	}
}
wanted_poster = function(){
	var choice;
	ctx.drawImage(board,5*htmlCanvas.width/100,7*htmlCanvas.height/100,90*htmlCanvas.width/100,90*htmlCanvas.height/100);
	ctx.drawImage(sticky,58*htmlCanvas.width/100,18*htmlCanvas.height/100,35*htmlCanvas.width/100,57*htmlCanvas.height/100);
	htmlCanvas.style.top=000;
	htmlCanvas.style.left=0000;

	var end_message_num = level*6;
	if (NUM_OF_QUESTIONS_PER_QUIZ - score === 0){
		end_message_num+=5;
		choice = 5;
	}
	else if (score === 0){
		choice = 0;
		}
	else if (score <= NUM_OF_QUESTIONS_PER_QUIZ/4){
		end_message_num+=1;
		choice = 1;
	}
	else if (score <= 2*NUM_OF_QUESTIONS_PER_QUIZ/4){
		end_message_num+=2;
		choice = 2;
	}
	else if (score <= 3*NUM_OF_QUESTIONS_PER_QUIZ/4){
		end_message_num+=3;
		choice = 3;
	}
	else if (score < 4*NUM_OF_QUESTIONS_PER_QUIZ/4){
		end_message_num+=4;
		choice = 4;
		}
	if (image_flag === 1)
		ctx.drawImage(butt_img_light,button_list[1].x,button_list[1].y,button_width,button_height);
	else
		ctx.drawImage(butt_img,button_list[1].x,button_list[1].y,button_width,button_height);
	ctx.fillStyle="black bold";
	var font_size = 9*(htmlCanvas.height/660+htmlCanvas.width/1360);
	ctx.font = 'bold '+(2*font_size)+'px Comic Sans MS';
	ctx.fillText('Score : '+score+'/20',button_list[1].x,button_list[1].y - 18*htmlCanvas.height/100);
	ctx.font = 'bold '+font_size+'px Comic Sans MS';
	font_size = Math.round(font_size);
	//Comic Sans MS,Papyrus,Brush Script MT
	fill_the_text2(end_message_list[end_message_num],61*htmlCanvas.width/100,32*htmlCanvas.height/100,20,Math.round(684/font_size*htmlCanvas.width/1400));//840 200
	ctx.font = 'bold '+font_size+'px Arial';
	ctx.fillStyle = 'black bold';
	ctx.font = ''+33/Math.sqrt(1360^2 + 660^2)*Math.sqrt(htmlCanvas.height^2+htmlCanvas.width^2)+'px Arial';
	ctx.fillText('Return',button_list[1].x + 6.3*htmlCanvas.width/100,button_list[1].y + 5.5*htmlCanvas.height/100);
	ctx.fillStyle="#3B170B";
	ctx.font = 'bold '+16*(htmlCanvas.height/660+htmlCanvas.width/1360)+'px Papyrus';
	ctx.rotate(10*Math.PI/180);
	if (framecount === 0)
		poster_img.onload=poster_on_board_animation(choice);
	else
		poster_on_board_animation(choice);
	framecount++;
}
the_end = function(){
	adjust_resolution();
	ctx.save();
	var button_temp = {
		x:6.5*htmlCanvas.width/10,
		y:8*htmlCanvas.height/10,
	}; 
	button_width = 20/100*htmlCanvas.width;
	button_height = 9/100*htmlCanvas.height;
	button_list[1] = button_temp;
	if (answer === 1){
			score = 0;
			question_num = -1;
			num_of_questions = 0;
			answer = 0;
			return;
	}		
	//var img_src_string = 'http://onepiece-planet.com/wp-content/uploads/2015/10/finish_img_';
	var img_src_string = './images/finish_img_';
	ctx.fillStyle = 'black';
	//img_src_string = 'http://onepiece-planet.com/wp-content/uploads/2015/10/';
	img_src_string = './images/';
	ctx.drawImage(back_img,0,0,htmlCanvas.width,htmlCanvas.height);
	if (image_flag === 1)
		ctx.drawImage(butt_img_light,button_list[1].x,button_list[1].y,button_width,button_height);
	wanted_poster();
}
	check_all_buttons = function (x,y){
	var button = 0;
	if (click_in_button(x,y,1))
		button = 1;
	if (click_in_button(x,y,2))
		button = 2;
	if (click_in_button(x,y,3))
		button = 3;
	if (click_in_button(x,y,4))
		button = 4;
	return button;
}
document.onmousedown = function(mouse){
	if (curr_time < MIN_TIME_PER_QUESTION){
		clicked_button = 0;
		return;
	}
	var button = 0;
	button = check_all_buttons(mouse.clientX,mouse.clientY);
	if (button === 1)
		clicked_button = 1;
	if (button === 2)
		clicked_button = 2;
	if (button === 3)
		clicked_button = 3;
	if (button === 4)
		clicked_button = 4;
}
document.onmouseup = function(mouse){
	var button = 0;
	button = check_all_buttons(mouse.clientX,mouse.clientY);
	if (button === 0)
		return;
	if (button === clicked_button)
		answer = button;
}
document.onmousemove = function(mouse){
	var button = 0;
	button = check_all_buttons(mouse.clientX,mouse.clientY)
	if (button === 1)
		image_flag = 1;
	else if (button === 2)
		image_flag = 2;
	else if (button === 3)
		image_flag = 3;
	else if (button === 4)
		image_flag = 4;
	else 
		image_flag = 0;
}
closest_space = function(entity,x){
	var x1=x;
	var x2=x;
	var cnt = 0;
	while (1===1){
		x1--;x2++;
		cnt++;
		if(entity.charAt(x1) === ' ' ){
			return -cnt;
		}
		if(entity.charAt(x2) === ' '){
			return cnt;
		}
		if (x1<0 && x2>entity.length)
			return 0;
	}
}
fill_the_text2 = function(entity,x,y,plus,number){
		var chars = entity.length;
	var cnt =  Math.round(chars / number);
	var res = {};
	var space = 0;
	res[0] = entity;
	var i=0;
	tmp = entity;
	
	for (i=i; i<cnt; i++){
		var tmp = res[i];
		if (tmp.charAt(number) != ' ')
			space = closest_space(tmp,number);
		res[i] = tmp.substring(0,number+space);
		res[i+1] = tmp.substring(number+space+1,chars - i*number);
		space = 0;
	}
	
	for (var i=0; i<=cnt; i++){
		ctx.fillText(res[i],x,y+i*plus);
	}
}
fill_the_text = function(entity,x,y,plus,number){
	var pos = entity.search("~");
	if (pos!= -1){
		var owner = entity.substring(pos,entity.length);
		entity = entity.substring(0,pos-1);
	}
	var chars = entity.length;	
	if (chars > number){
		cut = chars - number ;
		var res1 = entity.substring(0,number);
		var res2 = entity.substring(number,chars);
		if (res2.length > number){
			var res3 = res2.substring(number,res2.length);
			res2 = res2.substring(0,number);
		}
		ctx.fillText(res1,x,y);
		ctx.fillText(res2,x,y + plus);
		if (res3)
			plus+=plus;
		if (pos != -1){
			ctx.font = 'bold 20px Papyrus';
			ctx.fillText(owner,x + entity.length*2,y+plus);
			ctx.font = 'italic 20px Papyrus';
		}
	}
	else {
		ctx.fillText(entity,x,y);
		if (pos != -1){
			ctx.font = 'bold 20px Papyrus';
			ctx.fillText(owner,20+x + entity.length*7.5,y);
			ctx.font = 'italic 20px Papyrus';
		}
	}
}
draw_quiz = function(entity){

//font_size = 8 + 7/1000*htmlCanvas.width+'px Arial';
ctx.font = font_size;
ctx.drawImage(butt_img2,11/100*htmlCanvas.width,25/100*htmlCanvas.height,80/100*htmlCanvas.width,10/100*htmlCanvas.height);
ctx.fillStyle = 'white';
ctx.globalAlpha = (Math.round((tmp_date.getTime() - start_time))/(1000*MIN_TIME_PER_QUESTION));//fading effect
fill_the_text(num_of_questions+1+') '+entity.question,12/100*htmlCanvas.width,31/100*htmlCanvas.height,30/100*htmlCanvas.height,num_of_chars_in_line_title);
ctx.fillStyle = 'black';
ctx.globalAlpha = 1;


ctx.drawImage(butt_img,button_list[1].x,button_list[1].y,button_width,button_height);
ctx.drawImage(butt_img,button_list[2].x,button_list[2].y,button_width,button_height);
ctx.drawImage(butt_img,button_list[3].x,button_list[3].y,button_width,button_height);
ctx.drawImage(butt_img,button_list[4].x,button_list[4].y,button_width,button_height);
if (image_flag != 0)
	ctx.drawImage(butt_img_light,button_list[image_flag].x,button_list[image_flag].y,button_width,button_height);
if (MIN_TIME_PER_QUESTION)
	ctx.globalAlpha = (Math.round((tmp_date.getTime() - start_time))/(1500*MIN_TIME_PER_QUESTION));//fading effect
fill_the_text2(entity.ans1,button_list[1].x+2/100*htmlCanvas.width,button_list[1].y+4/100*htmlCanvas.height,fill_the_text_plus,num_of_chars_in_line_button);
fill_the_text2(entity.ans2,button_list[2].x+2/100*htmlCanvas.width,button_list[2].y+4/100*htmlCanvas.height,fill_the_text_plus,num_of_chars_in_line_button);
fill_the_text2(entity.ans3,button_list[3].x+2/100*htmlCanvas.width,button_list[3].y+4/100*htmlCanvas.height,fill_the_text_plus,num_of_chars_in_line_button);
fill_the_text2(entity.ans4,button_list[4].x+2/100*htmlCanvas.width,button_list[4].y+4/100*htmlCanvas.height,fill_the_text_plus,num_of_chars_in_line_button);
//ctx.globalAlpha = 1.5;

	
}
draw2_quiz = function(entity){
var font_size = 20/1000*htmlCanvas.width+'px Arial';
ctx.font = font_size;
ctx.drawImage(butt_img2,40/100*htmlCanvas.width,25/100*htmlCanvas.height,20/100*htmlCanvas.width,10/100*htmlCanvas.height);
ctx.fillStyle = 'white';
fill_the_text(entity.question,42/100*htmlCanvas.width,32/100*htmlCanvas.height,30/100*htmlCanvas.height,num_of_chars_in_line_title);
ctx.fillStyle = 'black';
font_size = 15/1000*htmlCanvas.width+'px Arial';
ctx.font = font_size;
ctx.drawImage(butt_img,button_list[1].x,button_list[1].y,button_width,button_height);
ctx.drawImage(butt_img,button_list[2].x,button_list[2].y,button_width,button_height);
ctx.drawImage(butt_img,button_list[3].x,button_list[3].y,button_width,button_height);
ctx.drawImage(butt_img,button_list[4].x,button_list[4].y,button_width,button_height);
if (image_flag != 0)
	ctx.drawImage(butt_img_light,button_list[image_flag].x,button_list[image_flag].y,button_width,button_height);
fill_the_text(entity.ans1,button_list[1].x+7/100*htmlCanvas.width,button_list[1].y+5.5/100*htmlCanvas.height,4/100*htmlCanvas.height,num_of_chars_in_line_button);
fill_the_text(entity.ans2,button_list[2].x+7/100*htmlCanvas.width,button_list[2].y+5.5/100*htmlCanvas.height,4/100*htmlCanvas.height,num_of_chars_in_line_button);
fill_the_text(entity.ans3,button_list[3].x+6/100*htmlCanvas.width,button_list[3].y+5.5/100*htmlCanvas.height,4/100*htmlCanvas.height,num_of_chars_in_line_button);
fill_the_text(entity.ans4,button_list[4].x+7/100*htmlCanvas.width,button_list[4].y+5.5/100*htmlCanvas.height,4/100*htmlCanvas.height,num_of_chars_in_line_button);
}
clock_animation = function(){
	//clock.src = 'http://onepiece-planet.com/wp-content/uploads/2015/10/ma_clock.png';
	clock.src = './images/ma_clock.png';
	tmp_date = new Date();
	anime_curr_time = tmp_date.getTime();
	if ((anime_curr_time - anime_clock_time) >= 1000/(num_of_clock_frames/MAX_TIME_PER_QUESTION+0.1)){
		//choose poio shmeio emfanizeis
		anime_clock_time = tmp_date.getTime();
		var clocks_per_row = 8;
		clock_cnt++;
		clock_x-=80;
		if (clock_cnt === clocks_per_row){
			clock_x = 560;
			clock_y-= 80;
			clock_cnt = 0;
		}
	}
	ctx.drawImage(clock,clock_x,clock_y,80,80,11/100*htmlCanvas.width-10/100*htmlCanvas.height,25/100*htmlCanvas.height,10/100*htmlCanvas.height,10/100*htmlCanvas.height);
}
take_questions_from_list1 = function(question_num){
	var self = take_questions_from_list2(question_num);
	return self;
}
make_starting_buttons = function(x,y,width,height){
	var button1 = {
		x:x,
		y:y +3/100*htmlCanvas.height,
	}; 
	var button2 = {
		x:x,
		y:y + height +5/100*htmlCanvas.height,
	}; 
	var button3 = {
		x:x,
		y:y + height + 16.5/100*htmlCanvas.height,
	}; 
	var button4 = {
		x:x,
		y:y + height + 28/100*htmlCanvas.height,
	}; 
	button_list[1] = button1;
	button_list[2] = button2;
	button_list[3] = button3;
	button_list[4] = button4;
	button_width = width;
	button_height = height;
}
make_buttons = function(x,y,width,height){
	var button1 = {
		x:x + 4/10*htmlCanvas.width - width,
		y:y,
	}; 
	var button2 = {
		x:x + 4/10*htmlCanvas.width+ 20,
		y:y,
	}; 
	var button3 = {
		x:x + 4/10*htmlCanvas.width - width,
		y:y + height + 20,
	}; 
	var button4 = {
		x:x + 4/10*htmlCanvas.width+ 20,
		y:y + height + 20,
	}; 
	button_list[1] = button1;
	button_list[2] = button2;
	button_list[3] = button3;
	button_list[4] = button4;
	button_width = width;
	button_height = height;
}
click_in_button = function (x,y,i){
	if (!x)
			return false;
	if (x<= (button_list[i].x + button_width) && x>=button_list[i].x && (y)<= (button_list[i].y +button_height) && (y)>=button_list[i].y)
		return true;
	return false;
}
choose_question = function (){
	question_num = level*30+Math.round(Math.random()*30);
	while (array_of_used_questions[question_num-level*30] != 0){
		question_num = level*30+Math.round(Math.random()*30);
	}
	array_of_used_questions[question_num-level*30]++;
	num_of_questions++;
	clock_x = 320;
	clock_y = 560;
	clock_cnt = 3;//clocks_per_row-clocks_on_last_row
}

create_resolution(1920,1200); //2.304.000
create_resolution(1920,1080); //2.073.600
create_resolution(1680,1050); //1.764.000
create_resolution(1600,900);  //1.440.000
create_resolution(1280,1024); //1.310.720
create_resolution(1440,900);  //1.296.000
create_resolution(1366,768);  //1.049.088
create_resolution(1280,800);  //1.024.000
create_resolution(720,1280);  //921.600
create_resolution(768,1024);  //786.432
create_resolution(1024,768);  //786.432
create_resolution(360,640);   //230.400
create_resolution(320,568);   //181.760
create_resolution(320,480);   //153.600
//14 resolutions
 
quiz = function(){

	adjust_resolution();
	ctx.clearRect(0,0,htmlCanvas.width,htmlCanvas.height);
	
	var tmp_string;
	if (question_num < 0){
		choose_level();
		if (num_of_questions > -1){
			tmp_date = new Date();
			start_time = tmp_date.getTime();
			}
		return;
	}
	if ((num_of_questions) >= NUM_OF_QUESTIONS_PER_QUIZ){
		the_end();
		return;
	}	
	ctx.drawImage(back_img,0,0,htmlCanvas.width,htmlCanvas.height);
	framecount++;
	var object;
	tmp_date = new Date();
	curr_time = Math.round((tmp_date.getTime() - start_time)/1000);
	if (curr_time >= 20){//20 secs   fps=50 framecount=20->1 sec
		choose_question();
		console.log('You were too slow');
		tmp_date = new Date();
		start_time = tmp_date.getTime();
		anime_clock_time = tmp_date.getTime();
	}
	object = take_questions_from_list1(question_num);
	if (curr_time > MAX_TIME_PER_QUESTION - MIN_TIME_PER_QUESTION)
		return;
	adjust_by_resolution();
	if (object){
		make_buttons(button_x,button_y,button_width,button_height);
		draw_quiz(object);
		}
	else
		draw_quiz(object);
	//if ((htmlCanvas.width+htmlCanvas.height>=1500) && (htmlCanvas.width>=800) && (htmlCanvas.height>=500))
		clock_animation();
	//else 
	//	ctx.fillText('Time Left: '+(20-curr_time),1.8*htmlCanvas.width/100,4.5*htmlCanvas.height/100);
	if (answer != 0){
		choose_question();
		if (answer === object.correct){
			score++;
			answer = 0;
			framecount = 0;
			delete object;
			tmp_date = new Date();
			start_time = tmp_date.getTime();
			anime_clock_time = tmp_date.getTime();
			
			}
		else {
			framecount = 0;
			console.log('wrong answer');
			answer = 0;
			tmp_date = new Date();
			start_time = tmp_date.getTime();
			anime_clock_time = tmp_date.getTime();
			delete object;
			}
		}
}
