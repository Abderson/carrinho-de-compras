let valorTotal = 0;                                             /*Criando uma variavel*/
document.getElementById("lista-produtos").innerHTML = "";      /*Limpar o carrinho*/
document.getElementById("valor-total").innerHTML = "R$0";    /*Limpar o carrinho*/

function adicionar() {
    let produto = document.getElementById('produto').value;  /*Pegando o valor do input*/
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;  /*Pegando o valor do input*/
    let soma = quantidade * valorUnitario;
    let carrinho = document.getElementById("lista-produtos");     /*Pegando o elemento do DOM*/
    let novoProduto = document.createElement("section");          /*Criando um novo elemento*/
    novoProduto.classList.add("carrinho__produtos__produto");     /*Adicionando a classe ao novo elemento*/
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${soma.toFixed(2)}</span>`;        /*Alterando o conteudo do novo elemento*/
    carrinho.appendChild(novoProduto);                             /*Adicionando o novo elemento ao DOM*/


    valorTotal += soma;                                            /*Adicionando o valor ao total*/
    document.getElementById("valor-total").innerHTML = `R$ ${valorTotal.toFixed(2)}`;  /*Alterando o conteudo do elemento*/
    document.getElementById('quantidade').value = '0';  /*Pegando o valor do input*/
    document.getElementById('produto').value = '0';  /*Pegando o valor do input*/
    
 

}

function limpar() {
    document.getElementById('produto').value = '';  /*Pegando o valor do input*/
    document.getElementById('quantidade').value = '';  /*Pegando o valor do input*/
    document.getElementById("lista-produtos").innerHTML = "";      /*Limpar o carrinho*/
    document.getElementById("valor-total").innerHTML = "R$00,00";    /*Limpar o carrinho*/
}

