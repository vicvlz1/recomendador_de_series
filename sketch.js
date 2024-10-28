let campoIdade;
let campoDrama;
let campoComedia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de séries");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoDrama = createCheckbox("Gosta de Drama?");
  campoComedia = createCheckbox("Gosta de Comedia?");
}

function draw() {
  background("rgba(251,181,222,0.71)");
  let idade = campoIdade.value();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeComedia = campoComedia.checked();
  let recomendacao = geraRecomendacao( idade, gostaDeDrama, gostaDeComedia);

  fill(color(76, 0, 140));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeDrama, gostaDeComedia) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "The Boys";
    } else {
      if (idade >= 12) {
        if(gostaDeDrama || gostaDeComedia) {
          return "Midnight gospel";          
        } else{
         return "Brooklyn-99";
        }
      } else {
        if (gostaDeComedia) {
          return "Stranger Things";
        } else {
          return "Gilmore Girls";
        }
      }
    }
  } else {
    if (gostaDeDrama) {
      return "Gossip Girl";
    } else {
      return "Breaking Bad";
    }
  }
}
