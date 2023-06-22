class Erro extends Error {
    constructor(message){
        super(message);
        this.name = "Erro";
    }
}

class Produto {
    constructor(nome, dataCadastro, descricao, preco) {
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }

    retornar_mostrarProdutos() {
        try {
         return this.mostrar_produtos();   
        } catch (error) {
            return error;
        }
    }

    mostrar_produtos() {
     if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "") {
         return `<div class = "lista-produtos">
            <h1>${this.nome}</h1>
            <p>${this.dataCadastro}</p>
            <h3>${this.descricao}</h3>
            <h2>${this.preco}</h2>
            </div>`;
         } else {
            throw new Erro("Há campos vazios.");
        }
    }
 }

 class ProdutoDestaque extends Produto {
    constructor(nome, dataCadastro, descricao, preco, imageDest) {
        super(nome, dataCadastro, descricao, preco);
        this.imageDest = imageDest;
    }

    retornar_produtoDestaque() {
        try {
         return this.mostrar_produtoDestaque();
        } catch (error) {
            return error;
        }
    }

    mostrar_produtoDestaque() {
        if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "" && this.imageDest != ""){
         return `<div class = "produto-destaque">
          <h1>${this.nome}</h1>
          <img style src = "${this.imageDest}" alt = "imagem destaque"></img>
          <p>${this.dataCadastro}</p>
          <h3>${this.descricao}</h3>
          <h2>${this.preco}</h2>
          </div>`;
        }
    }
 } 
 

 const produtoUm = new ProdutoDestaque("Photocards", "27/06","Photocards aleatórios","40,00","https://www.google.com/url?sa=i&url=https%3A%2F%2Fshopee.com.br%2F55Pcs-Box-Stray-Kids-Photocards-Stay-In-STAY-Album-LOMO-Card-Postcard-i.540242560.12497868142&psig=AOvVaw1JiA0vl4OltPFlvlNKfrh6&ust=1687483545238000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiq_aTc1f8CFQAAAAAdAAAAABBf");
 const produtoDois = new Produto("Photocards", "27/06","Photocards aleatórios","40,00");
 
 let produto_destaque = document.getElementById("produto-destaque");
 let produtos = document.getElementById("lista-produtos");
 
 produto_destaque.insertAdjacentHTML('afterbegin',produtoUm.mostrar_produtoDestaque());
 produtos.insertAdjacentHTML('afterbegin', produtoDois.mostrar_produtos());

 console.log(produtoDois.retornar_mostrarProdutos());
 console.log(produtoUm.retornar_produtoDestaque());