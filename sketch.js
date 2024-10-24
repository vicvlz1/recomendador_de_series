let campoIdade;
let campoComédia;
let campoDrama;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de series");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de comédia?");
  campoAventura = createCheckbox("Gosta de drama?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeComédia = campoComédia.checked();
  let gostaDeDrama = campoDrama.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeComédia, gostaDeDrama);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeComédia, gostaDeDrama) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "The officie";
    } else {
      if (idade >= 12) {
        if(gostaDeComédia || gostaDeDrama) {
          return "modern family";          
        } else{
         return "How I Met Your Mother";
        }
      } else {
        if (gostaDeDrama) {
          return "The Bear";
        } else {
          return "Gossip Girl";
        }
      }
    }
  } else {
    if (gostaDeComédia) {
      return "Brooklyn-99";
    } else {
      return "O feitiço do tempo";
    }
  }
}
