class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    exibirMensagem(){

        switch (this.tipo){
            case "mago":
                console.log(`O ${this.tipo} chamado ${this.nome} atacou usando magia`)
                break;
            case "guerreiro":
                console.log(`O ${this.tipo} chamado ${this.nome} atacou usando espada`)
                break;
            case "monge":
                console.log(`O ${this.tipo} chamado ${this.nome} atacou usando artes marciais`)
                break
            case "ninja":
                console.log(`O ${this.tipo} chamado ${this.nome} atacou usando shuriken`)   
                break
            default:
                console.log(`${this.tipo} não é uma classe válida`)

        }


    }

}

let heroi = new hero ("Jao", 27, "ninja")

heroi.exibirMensagem()