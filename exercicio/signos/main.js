import colecao_signos from "./colecaoSignos.js";
import retorna_signo from "./funcoes.js";

let data_app = new Date();

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);