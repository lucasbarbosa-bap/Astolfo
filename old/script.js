let PaginaAtual = 0;
let TagAtual = "astolfo_(fate)";

async function BuscarFemboys() {
    console.log("Testando femboys");

    const RespostaApi = await fetch(`https://corsproxy.io/?https://safebooru.org/index.php?page=dapi&s=post&q=index&json=1&limit=6&tags=${TagAtual}&pid=${PaginaAtual}`);

    const dados = await RespostaApi.json();

    console.log(dados);
    TrocarFemboys(dados);
}

function TrocarFemboys(dados) {
    const Imagem = document.querySelectorAll(".Galeria_project_chika figure img");

    for(let i = 0; i <6; i++) {
        const LinksFemboys = dados[i].file_url;
        console.log("Femboys grátis em: ");
        console.log(LinksFemboys);

        Imagem[i].src = LinksFemboys;
    }
}

function FazerPesquisa() {
    TagAtual = document.getElementById("EntradaBuscas").value;
    PaginaAtual = 0;

    document.getElementById("EntradaBuscas").value = "";

    BuscarFemboys();
}


const btv = document.getElementById("BtVoltar");
const bta = document.getElementById("BtAvancar");

btv.disabled = true;

function VoltarPagina(){
    PaginaAtual -= 1;
    bta.disabled = false;

    if (PaginaAtual == 0) {btv.disabled = true};
    BuscarFemboys();
}

function AvancarPagina(){
    PaginaAtual += 1;
    btv.disabled = false;

    //if (PaginaAtual == 4) {bta.disabled = true};
    BuscarFemboys();
}

document.getElementById("BtVoltar").addEventListener("click", VoltarPagina);
document.getElementById("BtAvancar").addEventListener("click", AvancarPagina);

const BotoesPesquisa = document.querySelectorAll(".BtSearch");
BotoesPesquisa.forEach(botao => {
    botao.addEventListener("click", FazerPesquisa);
});
BuscarFemboys();

