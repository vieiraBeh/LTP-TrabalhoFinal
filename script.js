class Produto {
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco
    }

    mostrar_produto(){
        return `<div> ${this.nome} </div>,
                <div> ${this.dataCadastro} </div>,
                <div> ${this.descricao} </div>,
                <div> ${this.preco} </div>`
    }
 }

    //Herança//
    
 class ProdutosDestaque extends Produto {
    constructor(){
        super(nome, dataCadastro, descricao, preco, Image)
    }

    mostrar_produtoDestaque(){
        return `<div> ${this.nome} </div>,
        <div> ${this.dataCadastro} </div>,
        <div> ${this.descricao} </div>,
        <div> ${this.preco} </div>,
        <div> ${this.Image} </div>`
    }
 }

 //const produto = new Produto();//
 //const produtoDestaque = new ProdutosDestaque();//

 const produtosTwo = new Produto("Photocards", "27/06", "Photocards aleatórios", "40,00");

 //git init//

 //let produtosDest = document.getElementById("produto-destaque")//

 let produtos = document.getElementById("lista-produtos");

 //produtosDest.insertAdjacentHTML('afterbegin', 'mostrar_produtoDestaque')//
 produtos.insertAdjacentHTML('afterbegin',produtosTwo.mostrar_produto());