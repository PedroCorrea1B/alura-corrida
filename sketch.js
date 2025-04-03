function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🏎", xJogador1, 70);
  text("🛵", xJogador2, 300);
  text("😼", xJogador3, 150);
  text("👻", xJogador4, 230);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador1 > 290) {
    text("Jogador 1 venceu!", 23, 200)
    noLoop();
  }
  if (xJogador2 > 290) {
    text("Jogador 2 venceu!", 23, 200);
    noLoop();
  }
  if (xJogador3 > 290) {
    text("Jogador 3 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador4 > 290) {
    text("Jogador 4 venceu!", 23, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "f") {
    xJogador2 += random(20);
  }
  if (key == "h") {
    xJogador3 += random(20);
  }
  if (key == "l") {
    xJogador4 += random(20);
  }
}
