let listaDeNumeroSorteados = [];
let numeroLimites = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemInicial() {
    exibirTextoNatela('h1', 'jogo do número secreto');
    exibirTextoNatela('p', 'escolher um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNatela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobrio o numero secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNatela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNatela('p', 'O número secreto é menor ');
        } else{
            exibirTextoNatela('p', 'O número secreto é maior');
        }
        tentativas++;
        limpaCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimites + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimites){
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}
 function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
 }
 function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial();
    numeroSecreto.getElementById('reiniciar').setAttribute('disabled', 'true');
 }