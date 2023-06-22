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
    constructor(nome, dataCadastro, descricao, preco, imageDest){
        super(nome, dataCadastro, descricao, preco);
        this.imageDest = imageDest
    }

    retornar_produtoDestaque(){
        try{
            return this.mostrar_produtoDestaque();
        } catch (error) {
            return error
        }
    }

    mostrar_produtoDestaque(){
        if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != ""){
            return `<div>${this.nome}</div>
          <div>${this.dataCadastro}</div>
          <div>${this.descricao}</div>
          <div>${this.preco}</div>
          <div>${this.imageDest}</div>`
          }
         }
        } 
 

 const produtoUm = new ProdutosDestaque("Photocards", "27/06","Photocards aleatórios","40,00","https://www.google.com/url?sa=i&url=https%3A%2F%2Fshopee.com.br%2F55pcs-Caixa-Stray-Kids-Photocards-MANIAC-JAPAN-ENCORE-%25C3%2581lbum-LOMO-Cart%25C3%25A3o-Postal-%2528READY-STOCK%2529-i.711517700.22935003129&psig=AOvVaw1JiA0vl4OltPFlvlNKfrh6&ust=1687483545238000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiq_aTc1f8CFQAAAAAdAAAAABBQ");
 const produtoDois = new Produto("Photocards", "27/06","Photocards aleatórios","40,00");
 
 let produto_destaque = document.getElementById("produto-destaque");
 let produtos = document.getElementById("lista-produtos");
 
 produto_destaque.insertAdjacentHTML('afterbegin',produtoUm.mostrar_produtoDestaque());
 produtos.insertAdjacentHTML('afterbegin', produtoDois.mostrar_produtos());