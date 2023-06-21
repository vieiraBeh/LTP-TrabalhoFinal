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

    mostrar_produtos(){
        return {
            nome: this.nome,
            dataCadastro: this.dataCadastro,
            descricao: this.descricao,
            preco: this.preco
      }
   }
}

 class ProdutosDestaque extends Produto {
    constructor(){
        super(nome, dataCadastro, descricao, preco, Image)
    }

    retornar_mostrarProdutos() {
        try{
         return this.mostrar_produtosDestaque();   
        } catch (error) {
            return error
        }
    }

    mostrar_produtoDestaque(){
        if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "" && this.image != ""){
            return {
                nome: this.nome,
                dataCadastro: this.dataCadastro,
                descricao: this.descricao,
                preco: this.preco,
                Image: this.image
          }
         } else {
            throw new Erro("Há atributo vazio.")
        }
      }
 }

 const produtoDois = new Produto("Photocards", "27/06", "Photocard aleatório", "40", "");
 console.log(produtoDois.retornar_mostrarProdutos());

//faltando um conteúdo, pois não foi compreendido//