function brunaPrimeiraFase() {
  const msg = `De que maneira você quer entrar na masmorra?
      
      1. Escalar a árvore.
      2. Hackear o sistema de segurança da porta. 
      `;

  promptEscolha(
    msg,
    "interiormasmorra.html",
    "../../gameover/hack-gameover.html"
  );
}

function brunaSegundaFase() {
  const msg = `
      1. Esquerda
      2. Direita. 
      `;
  promptEscolha(
    msg,
    "../../gameover/esquerda-gameover.html",
    "corredormasmorra.html"
  );
}

function brunaTerceiraFase() {
  const msg = `
      1. Hackear a porta vermelha e descobrir a senha.
      2. Convencer a garota a passar a senha. 
      `;
  promptEscolha(msg, "../../gameover/hack-gameover.html", "../../vitoria.html");
}
