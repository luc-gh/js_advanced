//Storage - local

//O Storage é um objeto do JavaScript que permite armazenar dados de forma persistente em um navegador web.

// Existem dois tipos de storage: o localStorage e o sessionStorage.

//A principal diferença entre eles é que o localStorage mantém os dados armazenados mesmo depois que o navegador for fechado, 
//enquanto o sessionStorage mantém os dados enquanto a janela do navegador estiver aberta.

//Para armazenar um valor no storage, você pode usar a sintaxe:
localStorage.setItem('chave1', 'valor1');

//Para acessar um valor do storage, use:
let valor1 = localStorage.getItem('chave1');
console.log('valor1: ' + valor1);

//Para remover um item do storage, use:
localStorage.removeItem('chave1');

let valor2 = localStorage.getItem('chave1');
console.log('valor2: ' + valor2);


//É importante notar que os valores armazenados no storage são sempre strings.
//    Se você precisar armazenar um objeto, deverá primeiro converter para uma string usando JSON.stringify(), 
//    e quando for recuperar o valor, deverá usar JSON.parse() para converter de volta para um objeto.

let objeto1 = {nome1: 'John1', idade1: 30};

// Armazenanando o objeto no storage
localStorage.setItem('usuario1', JSON.stringify(objeto1));

// Acessando o objeto do storage
let usuario1 = JSON.parse(localStorage.getItem('usuario1'));
console.log('usuario1.nome1: ' + usuario1.nome1);  // 'John'


//Perceba que alguma operação feita com localStorage permanesce ativa mesmo após o navegador ser reiniciado.

// * Outros comentários importantes no outro código js.