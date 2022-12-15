//Chamada de API via JavaScript (é possível com diversas outras linguagens)

//Usando: Rapid API Hub, Numbers API, Método fetch (para JS)

function imprimir(x){
	document.getElementById('call1').innerHTML = x;
}


//O método fetch devolve uma Promise da resposta.
//Fazendo requisição GET com fetch:
fetch('https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true', {  //GET Date Fact (endpoint ou objetivo da chamada)
	method: 'GET',   //configuração de Método HTTP
	headers: {       //configuração de cabeçalhos
		'X-RapidAPI-Key': '[MY_API_KEY]',  //chave da API
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'                           //Hospedagem da API
	}
})
	.then(response => response.json())         //Convertemos a resposta para JSON, o que devolve outra Promise
	.then(response => console.log(response))   //Imprime a resposta no console
	.catch(err => console.error(err));         //Se houverem erros, imprimem-se-os no console (falhas na API)



//Para facilitar, é possível colocar as confirações numa variável:
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'MY_API_KEY',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};


//Fazendo outras requisições:
//src: https://rapidapi.com/pt/divad12/api/numbers-1/
fetch('https://numbersapi.p.rapidapi.com/1729/math?fragment=true&json=true', options)  //GET Math Fact
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

fetch('https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true', options)  //GET Random Fact
	.then(response => response.json()) 
	.then(response => console.log(response))
	.catch(err => console.error(err));

fetch('https://numbersapi.p.rapidapi.com/42/trivia?fragment=true&notfound=floor&json=true', options)  //GET trivia Fact
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

fetch('https://numbersapi.p.rapidapi.com/1492/year?fragment=true&json=true', options)  //GET year Fact
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));