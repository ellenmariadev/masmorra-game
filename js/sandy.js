function sandyPrimeiraFase (){
    const msg = `De que maneira você quer entrar na masmorra?
    
    1. Escalar a árvore.
    2. Hackear o sistema de segurança da porta. 
    `;

    promptEscolha(msg, '../gameover/arvore-gameover.html', 'P1interiormasmorra.html');
}

function sandySegundaFase (){
    const msg = `
    1. Esquerda
    2. Direita. 
    `;
    promptEscolha(msg, '../gameover/esquerda-gameover.html', 'P1corredormasmorra.html');
}

function sandyTerceiraFase (){
    const msg = `
    1. Hackear a porta vermelha e descobrir a senha.
    2. Convencer a garota a passar a senha. 
    `;
    promptEscolha(msg, '../vitoria.html', '../gameover/garota-gameover.html');
}

