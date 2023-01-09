//Storage - session

//OBS: ----------------------------------------------------------------------------------------------------
//Perceba que variáveis declaradas no outro arquivo não podem ser criadas com nome igual neste, pois para a
//página, o arquivo JS interpretado é uma junção dos dois que foram importados para ela, em sequência.

//O sessionStorage funciona da mesma forma que o localStorage, 
//  mas os dados armazenados só estarão disponíveis enquanto a janela do navegador estiver aberta. 

//Quando a janela do navegador for fechada, os dados armazenados serão perdidos.

// * Outros comentários no outro código js.

//Para armazenar um valor no sessionStorage, use:
sessionStorage.setItem('chave2', 'valor3');

//Para acessar um valor do sessionStorage, use:
let valor3 = sessionStorage.getItem('chave2');

//Feche o navegador.
//Reabra a página depois de reiniciar o navegador e veja que agora o 'valor' não existe mais no sessionStorage.
console.log('valor3: ' + valor3);

//Remover:
sessionStorage.removeItem('chave2');

let valor4 = sessionStorage.getItem('chave2');
console.log('valor4: ' + valor4)

//Para remover todos os itens do sessionStorage, use:
sessionStorage.clear();

//Assim como no localStorage, os valores armazenados no sessionStorage são sempre strings.

//Ex:
let objeto2 = {nome2: 'John2', idade2: 30};

// Armazenar o objeto no sessionStorage
sessionStorage.setItem('usuario2', JSON.stringify(objeto2));

// Recuperar o objeto do sessionStorage
let usuario2 = JSON.parse(sessionStorage.getItem('usuario2'));
console.log('usuario2.nome2: ' + usuario2.nome2);  // 'John'

/*

Algumas aplicações avançadas do Storage em JavaScript incluem:

Armazenar configurações do usuário: 
	é possível armazenar as configurações do usuário no localStorage para que elas estejam 
	disponíveis mesmo depois que o navegador for fechado. Isso é útil se você quiser que as 
	configurações do usuário sejam mantidas mesmo depois de uma atualização da página ou do navegador.

Armazenar dados de formulários: 
	é possível armazenar os dados de um formulário no localStorage para que eles possam ser recuperados 
	caso o usuário volte à página ou atualize a página. Isso pode ser útil para evitar que o usuário tenha 
	que preencher um formulário toda vez que ele acessar a página.

Armazenar dados de autenticação: 
	é possível armazenar dados de autenticação do usuário (como token de acesso) no localStorage para 
	que o usuário não precise fazer login toda vez que acessar a página.

Armazenar dados de sessão: 
	é possível armazenar dados de sessão do usuário no sessionStorage para que eles só estejam disponíveis 
	enquanto a janela do navegador estiver aberta. Isso pode ser útil para armazenar informações temporárias 
	que só são relevantes para a sessão atual do usuário.

Armazenar dados de cache: 
	é possível armazenar dados que são frequentemente usados no localStorage para evitar ter que fazer uma 
	requisição HTTP toda vez que esses dados forem necessários. Isso pode aumentar o desempenho da página.

*/
