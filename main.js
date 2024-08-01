const prompt = require("prompt-sync")();
const biblioteca = []

const modelo = () => {
    const nome = prompt("Digite o nome do livro: ")
    const paginas = +prompt("Quantas páginas? ")
    const autor = prompt("Qual o ator? ")
    const publico = prompt("Qual é seu público alvo? ")
    const custo = prompt("Qual o custo?")

    if(
        nome != "" &&
        paginas > 0 &&
        autor != "" &&
        publico != "" &&
        custo != ""
    ){
        return {nome, paginas, autor, publico, custo}
    }else
        console.log("Inválido!")
}

const criar = () => {
    const novo = modelo()

    if(novo){
        biblioteca.push(novo)
        console.log("Livro adicionado com sucesso!")
    }
}

const listar = () => {
    if(biblioteca.length == 0){
        console.log("Não há livros na biblioteca!")
    }else
        biblioteca.forEach((el, i) => {
            console.log(`${i + 1}
                Nome:${el.nome}
                Paginas:${el.paginas}
                Autor:${el.autor}
                Publico:${el.publico}
                Custo:${el.custo}
                `)
        })
}

const atualizar = () => {
    listar()

    const indice = +prompt("Digite o indice desejado! ") -1
    const novo = modelo()
    
    if(novo && indice >= 0 && indice < biblioteca.length){
        biblioteca[indice] = novo
        console.log("Livro adicionado com sucesso!")
    }else
        console.log("Inválido!")

}

const remover = () => {
    listar()

    const indice = +prompt("Digite o indice desejado! ") -1

    if(indice >= 0 && indice < biblioteca.length){
        biblioteca.splice(indice, 1)
        console.log("Livro removido com sucesso!")
    }else
        console.log("Inválido")
}

module.exports = {
    criar, listar, atualizar, remover
}