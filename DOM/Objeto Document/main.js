//"document" é o objeto de referência da página em si.

//Através dele, pode-se ter acesso a um grande número de propriedades.

//Na tabela presente na página, estão listadas algumas propriedades que podem ser utilizadas com o objeto document.
//Vejamos alguns exemplos delas:

//documentElement
const documento = document.documentElement;
const filhos = documento.childNodes;

console.log(filhos);

//getElementById
function mudarCor(novaCor){  //recebe a cor indicada no HTML como parâmetro
	var elemento = document.getElementById("para1");
	elemento.style.color = novaCor;
}

//createElement / appendChild
function addLI(veiculo){  //recebe o valor da caixa de texto indicada no HTML
	if(veiculo == ""){
		alert("Informe um veículo");
		document.getElementById("txtVeiculo").focus();
	}
	else {
		var lista = document.getElementById("transp");
		var novoItem = document.createElement("li");
		novoItem.textContent = veiculo;
		lista.appendChild(novoItem);
	}
}

//createAttribute / setAttributeNode / getElementsByTagName (podem ser usados em conjunto ao css, como no exemplo)
function novaCorAtrr(){
	tag = document.getElementsByTagName("h1")[0];
	var atributo = document.createAttribute("class");
	atributo.value = "novoAtrr";     //valor deste atributo é descrito no estilo (css)
	tag.setAttributeNode(atributo);  //aplica o estilo passado por parâmetro na tag indicada
}

//createTextNode
function adicionarTexto(valor){
	let novoTexto = document.createTextNode(valor);
	let paragrafo = document.getElementById("p1");
	let quebraDeLinha = document.createElement("br");
	if(valor == ""){  //garante que há algum texto
		alert("Insira algum texto!");
	}
	else{
		p1.appendChild(quebraDeLinha);  //adiciona uma quebra de linha (nova tag <br>)
		p1.appendChild(novoTexto);
	}
}

//removeChild
var a = 0;
function AR(cond){
	let p = document.getElementById("li");
	let c, d;
	if(cond === 1){  //adicionar
		++a;
		c = document.createTextNode(a);
		p.appendChild(c);
		p.appendChild(document.createElement("br"));
	}

	else{   //remover
		a--;
		p.removeChild(p.lastChild);
		p.removeChild(p.lastChild);
	}
}

//parentNode
console.log(document.getElementById("para1").parentNode);
console.log(document.getElementById("li").parentNode);
console.log(document.getElementsByTagName("section")[1].parentNode);
console.log(document.getElementsByTagName("li")[0]);
console.log(document.getElementsByTagName("li")[1]);
console.log(document.getElementsByTagName("li")[8]);  //não existe


//Ref:
//     https://www.devmedia.com.br/trabalhando-com-dom-em-javascript/29039
//     https://cfbcursos.com.br/javascript-73-criando-elementos-html-com-javascript-createelement-appendchild/
//     https://www.geeksforgeeks.org/html-dom-createattribute-method/
//     https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
//     https://www.w3schools.com/jsref/met_node_removechild.asp