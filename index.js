const prompt = require("prompt-sync")();
const {criar, listar, atualizar, remover} = require("./main")

while(1){
    console.log(`
        1-Criar livro
        2-Listar livros
        3-Atualizar
        4-Remover
        5-Sair`)
    const opcao = +prompt("Digite a opção desejada: ")

    switch (opcao) {
        case 1:
            criar()
            break;

        case 2:
            listar()
            break;

        case 3:
            atualizar()
            break;

        case 4:
            remover()
        break;

        case 5:
            process.exit()
            break;

        default:
            console.log("Inválido!")
            break;
    }
}