// 1
document.getElementById('btn').onclick=f1;
function f1(){
	document.getElementById('out').innerHTML=document.getElementById('input').value.length
}

// 2
document.getElementById('btn2').onclick=f2;
function f2(){
	var img = ['deer','panda','duck','bird'];
	var p = document.getElementById('out2');
	for (var i=0; i<img.length; i++){
	p.innerHTML += `<img src="img/${img[i]}.png">`;
	}
}


// 3
document.getElementById('btn3').onclick = f3;
function f3(){
	var i = document.getElementById('inp3').value;
	var p = '';
	if(~i.indexOf('https:\/\/')){
		p = i.replace(/https:\/\//g, '');
	}
	else if(~i.indexOf('http:\/\/')){
		p = i.replace(/http:\/\//g, '');
	}
	else{
		p=i;
	}
	document.getElementById('out3').innerHTML = p;
}

// 4
document.getElementById('btn4').onclick = f4;
function f4(){
	var i = document.getElementById('inp4').value;
	var p = '';
	if(~i.indexOf('https:\/\/')){
		p = i.replace(/https:\/\/www./g, '')
	}
	else if(~i.indexOf('http:\/\/')){
		p = i.replace(/http:\/\/www./g, '')
	}
	else if(~i.indexOf('https:\/\/www.')){
		p = i.replace(/http:\/\/www./g, '')
	}
	else if(~i.indexOf('http:\/\/www.')){
		p = i.replace(/http:\/\/www./g, '')
	}
	else{
		p=i;
	}
document.getElementById('out4').innerHTML=p;
}

// 5
document.getElementById('btn5')[0].onclick = f5;
function f5(){
	var n = document.getElementById('name').value;
	var s = document.getElementById('surname').value;
	var m = document.getElementById('mail').value;
	var p = document.getElementById('password').value;
	var p = document.getElementById('out5');
	if (n.slice(0,1) == " " || n.slice(-1) == " ") {
		n = n.replace(/ /, "");
	}
	if (s.slice(0,1) == " " || s.slice(-1) == " ") {
		s = s.replace(/ /g, "");
	}
	if (~p.indexOf(" ") || (p.length < 5)) {
		alert('Введите не менее пяти символов без пробелов!');
		return false;
	}
	if (~m.indexOf(" ")) {
		alert("Ваш e-mail должен быть без пробелов!");
		return false;
	} 
	else if (~m.indexOf("@")) {
		m = m;
	} 
	else {
		alert('Ваш email должен содержать символ @!');
		return false;
	}

	document.getElementById('out5').innerHTML = 'OK<br> Name:' + n + ';<br>Surname: ' + s + '; <br>password: ' + p + ';<br>e-mail: ' + m;
	return true;
}





// 6
document.getElementById('btn6').onclick = f6;
function f6(){
	var s = document.getElementById('inp6').value;
	var out = '';
	out = s.charCodeAt(0);
	document.getElementById('out6').innerHTML = 'Code: ' + out;
}