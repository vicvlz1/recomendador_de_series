// comédia, romance, drama

// brooklyn-99, LIVRE, comédia, sitcom
// how i meet you mother, 12, comédia, sitcom
// greys anatomy, 14, drama médico, romance
// modern family, LIVRE, comédia, sitcom,clássico
// o urso, 16, drama, comédia
// the office, 14, comédia, sitcom

let campoIdade;
let campoDrama;
let CampoComedida;

function setup() {
  createElement("h2","Recomendador de filmes")
  createCanvas(800, 400);
  createSpan("SuaIdade:");
  campoIdade = createInput("16");
  campoDrama
}

function draw() {
  background(220);
  let idade = campoIdade;value();
let recomendacao= geraRecomendacao(idade);
  text(recomendacao,width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade>= LIVRE)
  return "Modern Family"

} 
}else {
  return "brookl"
}



