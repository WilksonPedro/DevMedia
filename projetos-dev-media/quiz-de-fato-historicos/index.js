import readline from "readline-sync";
import { questoes } from "./colecao-de-dados.js";

// Logica da aplicação
const selecionarQuestoesAleatorias = (questoes, quantidadePerguntas) => {
    const questoesAleatorias = questoes.sort(() => Math.random() - 0.5); // Sorteia as questoes
    // O sort é um metodo que ordena os elementos do array 
    // O Math.random gera um numero aleatorio entre 0 e 1 e subtrai 0.5 para que o resultado seja negativo ou positivo
    return questoesAleatorias.slice(0, quantidadePerguntas);
}

const exibirPergunta = (questoes, index) => {
    console.log(`\n${index + 1} - ${questoes.pergunta}`);
    const respostaUsuario = readline.question('Digite sua resposta (ano): ');
    return respostaUsuario;
}

const validaRespostaUsuario = (respostaUsuario, questao) => {
    if (respostaUsuario === questao.resposta) {
        console.log('Resposta correta!');
        return true;
    } else {
        console.log(`Resposta errada! A resposta correta é ${questao.resposta}`);
        return false;
    }
}

const resultadoFinalGame = (pontuacaoFinal, nomeDoJogador) => {
    let mensagem = '';

    if (pontuacaoFinal <= 3) {
        mensagem = 'Oh não! Tente mais uma vez!!';
    } else if (pontuacaoFinal <= 6) {
        mensagem = 'Bom trabalho! Pratique um Pouco mais!';
    } else if (pontuacaoFinal <= 9) {
        mensagem = `Muito Bom! Você acertou a maioria!`;
    } else {
        mensagem = 'Exelcente!! Você é um verdadeiro GENIO!';
    }
    console.log(`\nJogador(a): ${nomeDoJogador} - Pontuação Final: ${pontuacaoFinal}`);
    console.log(mensagem);
}

// interface da aplicação
const iniciarQuiz = () => {
    console.log('--------QUIZ DE FATOS HISTÓRICOS--------\n');
    console.log('Seja bem-vindo jogador(a)!\n');

    const nomeJogador = readline.question('Digite seu nome: ');
    const quantidadePerguntas = 10;

    const questoesSelecionadas = selecionarQuestoesAleatorias(questoes, quantidadePerguntas);

    let pontuacaoFinal = 0;

        questoesSelecionadas.forEach((questao, index) => {
            const respostaUsuario = exibirPergunta(questao, index);
            const respostaValida = validaRespostaUsuario(respostaUsuario, questao);

            if (respostaValida == true) {
                pontuacaoFinal++;
            }
        });
        
        resultadoFinalGame(pontuacaoFinal, nomeJogador);
    }

iniciarQuiz();
