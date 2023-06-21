class Erro extends Error {
    constructor(message){
        super(message);
        this.name = "Erro";
    }
}

class Produto {
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco
    }

    retornar_mostrarrodutos() {
        try{
         return this.mostrar_produtos();   
        } catch (error) {
            return error
        }
    }

    mostrar_produtos(){
     if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != ""){
         return `<div>
            <h1>${this.nome}</h1>
            <p>${this.dataCadastro}</p>
            <h2>${this.descricao}</h2>
            <h2>${this.preco}</h2></div>`
         } else {
            throw new Erro("Há atributo vazio.")
     }
  }
}
 class ProdutosDestaque extends Produto {
    constructor(){
        super(nome, dataCadastro, descricao, preco, imageDest)
    }

    mostrar_produtoDestaque(){
            return `<div>${this.nome}</div>
          <div>${this.dataCadastro}</div>
          <div>${this.descricao}</div>
          <div>${this.preco}</div>
          <div>${this.imageDest}</div>`
          }
         } 
 

 //const produto = new ProdutoDestaque ("Album Face", "03-05","Album Kpop","150,00","www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-08-600x568.png")
 const produtoDois = new Produto("Photocards", "27/06","Photocards aleatórios","40,00");
 //git init//
 
 //let produtosDest = document.getElementById("produto-destaque")
 let produtos = document.getElementById("lista-produtos");
 
 //produtosDest.insertAdjacentHTML('afterbegin', 'mostrar_produtos_destaque');
 produtos.insertAdjacentHTML('afterbegin', produtoDois.mostrar_produtos());