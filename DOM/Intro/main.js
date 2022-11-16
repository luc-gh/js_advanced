//Introdução ao DOM (Document Object Model - Modelo do Objetos do Documento)

//Ref:
//		https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction
//		https://www.devmedia.com.br/trabalhando-com-dom-em-javascript/29039
//		https://www.javatpoint.com/document-object-model

//O DOM é a interface de representação da página Web e programação para os documentos HTML e XML.

//Ele representa a página com nós e objetos permitindo a manipulação desta através de uma linguagem de programação.
//Ele é construído a partir de várias APIs que se conectam numa API central, e outras podem ser adicionadas conforme a necessidade.

//Os padrões de DOM usados pelos navegdores mudam com o tempo (os mais usados nos navegadores atualmente são o W3C DOM e o WHATWG).
//É preciso ter atenção ao padrão usado para utilizar os métodos e funções de manipulação da página corretamente.

/*
Todas as propriedades, métodos e eventos disponíveis para manipular e criar páginas da Web são organizados em objetos 
	Por exemplo, o objeto document que representa o próprio documento, 
	o objeto table que implementa a Interface especial DOM HTMLTableElement, para acessar tabelas HTML, 
	e assim por diante. 
Esta documentação fornece uma referência objeto a objeto ao DOM.
*/

//Usa-se o DOM principalmente para atualizar uma página Web (DOM é bastante utilizado com Ajax) ou quando se quer construir 
//uma interface de usuário avançada. Com o DOM pode-se mover itens dentro de uma página ou criar efeitos CSS bastante 
//interessantes sem precisar nem mesmo recarregar a página.

//Acessando um valor de atributo atráves com Objetos de Documento (DOM):
//  No exemplo a seguir, será lid o valor de entrada de texto enviado pelo usuário, e imprimiremos uma mensagem de volta.
//  Será usada a referência "document.form1.name.value" para pegar o valor de entrada do campo de texto, onde:
//    document é a página em si;
//    form1 é o nome do formulário;
//    name é a referência do atributo do texto de entrada;
//    value é a propriedade, que retorna o valor de entrada enviado.

function printvalue(){
	var name = document.form1.name.value;
	alert("Bem-vindo, " + name + "!");
}

//Veja que ao imprimir o valor com o alert, este não é apagado da caixa de texto.
//Então, independentemente do valor da caixa, a mensagem será impressa e o valor só será modificado manualmente.