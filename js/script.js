function redirecionar(pag) {
  location.replace(pag);
}

function promptEscolha(pergunta, primeiraPagina, segundaPagina) {
  let entrada;

  while (entrada !== 1 && entrada !== 2) {
    entrada = Number(prompt(pergunta));
  }
  if (entrada === 1) {
    redirecionar(primeiraPagina);
  } else if (entrada === 2) {
    redirecionar(segundaPagina);
  }
}
