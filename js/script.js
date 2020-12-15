const p1 = {
  pontuacao : 0,
  botao : document.querySelector("#button1"),
  pontuacaoJogador : document.querySelector("#jogador1Pontuacao")
}
const p2 = {
  pontuacao : 0,
  botao : document.querySelector("#button2"),
  pontuacaoJogador : document.querySelector("#jogador2Pontuacao")
}
const botaoReset = document.querySelector("#button3");
const playTo = document.querySelector("#playTo")
let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent){
  if(!isGameOver){
    player.pontuacao++;
    if(player.pontuacao === winningScore){
      isGameOver = true;
      player.pontuacaoJogador.classList.add('winner')
      opponent.pontuacaoJogador.classList.add('loser')
    }
    player.pontuacaoJogador.innerText = player.pontuacao;
    }
}

p1.botao.addEventListener("click", () =>{
  updateScore(p1, p2)
})
p2.botao.addEventListener("click", () =>{
  updateScore(p2, p1)
})
botaoReset.addEventListener("click", reset)
playTo.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
})

function reset(){
  isGameOver = false;
  for (let player of [p1, p2]){
    player.pontuacao = 0;
    player.pontuacaoJogador.innerText = player.pontuacao;
    player.pontuacaoJogador.classList.remove('winner', 'loser')
  }
  
}
