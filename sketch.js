//variaveis da bolinha
let xBolinha = 300; //pra criar a variavel
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoComRaquete();
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  // primeiro parametro: x, segundo: y, terceiro: diametro
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;  
}

function verificaColisaoBorda(){
  
  if (xBolinha + raio > width || xBolinha - raio < 0){ //pra nao fazer a bolinha entrar na tela, aí coloca ou tira o raio
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoComRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function incluiPlacar() {
  stroke(255); //contorno na cor branca
  textAlign(CENTER);
  textSize(16);
  
  fill(color(255, 140, 0)); //laranja
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255); //branco
  text(pontosOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 595){
    meusPontos += 1;
  }
  
  if (xBolinha < 10) {
    pontosOponente += 1;
  }
}