//Eventos DOM

//Ref: https://www.w3schools.com/jsref/dom_obj_event.asp
//     há diverosos outros eventos, mas estes são os mais usados


//MouseEvent -> eventos relacionados ao cursor ----------------------------------------


//addEventListener: insere um manipulador de eventos à um elemento
	// sintaxe: 'element.addEventListener(event, function)'
	 // event: nome do evento (use sem o prefixo 'on') -> eventos: https://www.w3schools.com/jsref/dom_obj_event.asp
	 // function: função que ocorre quando o evento ocorre
//click: usuário clica sobre algo na página

var b = document.getElementById('botao');
var t = document.querySelector('#m');

b.addEventListener('click', function(){  
	console.log('addEventListener - click')
  	t.classList.toggle('h');
});

//MouseDown: clique abaixo de um elemento
var md = document.getElementById('mousedown');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');

md.onmousedown = ()=>{
	console.log('mousedown');
	b1.classList.toggle('des');
	b2.classList.toggle('apa');
	b3.classList.toggle('des');
};

//MouseUp: clique acima de um elemento
var mu = document.getElementById('mouseup');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

mu.onmouseup = ()=>{
	console.log('mouseup');
	c1.classList.toggle('apa');
	c2.classList.toggle('des');
	c3.classList.toggle('apa');
};

//Double Click: clique duplo do usuário
var pos = document.getElementById('dblclick');
var pos_css = document.querySelector('#dblclick-p');

pos.addEventListener('dblclick', function(){
	console.log('dblclick');
	pos_css.classList.toggle('alt-dblclick');
});

//MouseEnter: Clicker passa sobre o elemento (Hover pontual e definitivo)
function MouseEnter(){
	console.log('mouseenter');
	let txt = document.getElementById("h4-me");
	txt.classList.toggle('detalhes');
}

//Mouseover: Clicker passa sobre o elemento
document.getElementById('mouseoverout').onmouseover = ()=>{
	console.log('mouseover');
	document.getElementById('mouseoverout').classList.toggle('mod');
};

//Mouseout: Clicker sai do espaço destinado ao elemento
document.getElementById('mouseoverout').onmouseout = ()=>{
	console.log('mouseout');
	document.getElementById('mouseoverout').classList.toggle('mod');
};


//InputEvent -> eventos relacionados a interação com o usuário e entrada de dados ----------------------------------------

//Input: ocorre quando à alteração na entrada de dados
let i = document.getElementById("input-id");
i.oninput = ()=>{
	console.log('oninput');
	i.classList.toggle('alt-input');
};

//FocusEvent -> eventos relacionados ao foco ----------------------------------------

//Focus: foco num elemento / Blur: desfoco num elemento

let inp = document.querySelectorAll('.inputs');  //cria um nodelist com os elementos com essa classe

for(let i of inp){
	i.addEventListener("focus", () => { 
		console.log('focus');
		i.classList.toggle('i-alt');
	});

	i.addEventListener("blur", () => {
		console.log('blur');
		i.classList.toggle('i-alt');
	});
}

