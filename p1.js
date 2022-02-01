const prompt = require(`prompt-sync`)();

console.log(`A Jornada do Herói`);

const heroi = prompt(`Digite seu nome para iniciarmos nossa jornada: `);

const pescador = prompt(`Agora digite o nome de um amigo: `);

console.log(`\nNossa história se iniciar quando ${heroi}
está fazendo sua corrida matinal a beira mar...

Depois de algums quilômetros ele avista uma pequena embarcação,
sobre ela está um homem que lhe convida para um passeio de barco cheio de histórias...

 -Qual seu nome: (Perguntou ${heroi} ao pescador)
 -Sou ${pescador}, suba no meu barco e vamos navegar um pouco...
`);

const r1 = prompt(`Você aceitou entrar no barco? `);

let pontos = 0

if (r1 === "sim") {
   pontos++
}

const r2 = prompt(`Você avistou a ilha? `);

if (r2 === "sim") {
    pontos++
}
 
const r3 = prompt(`Você nadou até a ilha? `);

if (r3 === "sim") {
    pontos++
}
 
const r4 = prompt(`Você encontrou o tesouro? `);

if (r4 === "sim") {
    pontos++
 }

 const r5 = prompt(`Você saiu da ilha sem acordar o monstro? `);

if (r5 === "sim") {
    pontos++
}

const respostas = [r1, r2, r3, r4, r5];

console.log(respostas);

console.log(`Você fez: ${pontos} pontos`);

if (pontos === 5) {
    console.log('Você triunfa de maneira inquestionável e seus feitos serão  lembrados por muitas gerações.');
} else if (pontos === 4) {
    console.log(`Depois de muito esforço você conquista seu objetivo, embora  não de maneira perfeita. `);
} else if (pontos === 3) {
    console.log(`Você chega perto de conseguir alcançar seu objetivo, mas acaba  falhando por pouco.`);
} else if (pontos < 3 && pontos > 0 ) {
    console.log(`Você falha, mas ainda consegue fugir da situação.`);
} else {
    console.log(`Você falha miseravelmente`);
}