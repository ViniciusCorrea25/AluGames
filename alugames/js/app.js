let alugados = 1
 function alterarStatus(id) {
        let gameClicado = document.getElementById(`game-${id}`); // Recurou tudo que esta dentro da DIV com esse ID
        let imagem = gameClicado.querySelector('.dashboard__item__img'); //aqui agente recuperou somente a Classe do div que a imagem do jogo ta
        let botao = gameClicado.querySelector('.dashboard__item__button'); // recuperou somete a classe que o botão está
        let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
        

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}`)){ //gera uma janela de confirmação.
        imagem.classList.remove('dashboard__item__img--rented');//acessa uma várável e busca nela uma class e remove
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alugados=alugados-1;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alugados=alugados+1;
    }
    console.log(`Jogos alugados até o momento ${alugados}`);
 }

