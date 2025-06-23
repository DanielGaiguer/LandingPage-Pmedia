function toggleMenu() {
      const sidebar = document.getElementById('sidebar');
      const btn = document.getElementById('menuBtn');

      sidebar.classList.toggle('active');//Toggle, serve para alternar entre os modos ligado/desligado, nesse caso ele adiciona a classe se nao tiver e remove se tiver, adiciona esta classe para mostrar o menu lateral
      btn.classList.toggle('active'); // A mesma coisa, porem para mudar e ativar a animação do X do menu hamburguer

    }

function showTab(tabId) {
  // Esconde todo conteúdo das abas, removendo a classe 'active', onde a unica diferenca e o display que era 'block' e agora passa a ser 'none'
  document.querySelectorAll('.tab-content').forEach(function(content) {//Irá rodar todos os elementos com a classe tab-content, e irá retirar a classe active de todos
    content.classList.remove('active');
  });

  // Remove destaque de todos os botões
  document.querySelectorAll('.tab-button').forEach(function(button) {//A mesma situação, com o botão
    button.classList.remove('active');
  });

  // Remove a classe 'active' de todas as tabelas, escondendo-as inicialmente
  document.querySelectorAll('.tab-content').forEach(function(tab) {//A mesma situação, com o conteúdo
    tab.classList.remove('active');
  });


  // Mostra a aba clicada
  document.getElementById(tabId).classList.add('active');//Irá jogar a classe active, mostando o conteúdo

  // Adiciona classe ativa no botão clicado
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
    if (button.textContent.toLocaleLowerCase() === tabId) {;//Compara se o botão rodado no forEach, for o mesmo do chamado
      let textButton = button.textContent.toLocaleLowerCase();
      
      addStyleButtons(button, tabId);//Chama a função que irá adicionar o CSS aos botoões 
      animationWriter(textButton, button);//Chama a função que fará ma animação que simula o elemento sendo digitado
    }
  });
}  

//Irá jogar uma animação que simula o elemento sendo digitado
function animationWriter(textButton, button){
    button.textContent = ''; // Limpa o texto do botão antes de começar a animação
    
    // Adiciona cada letra com um atraso
   for (let i = 0 ; i < textButton.length ; i++) {//Para cada roda do for, uma letra é adicionada, partindo da quantidade de caracteres do texto do botão
      setTimeout(() => {//Seta o intervalo para a digitação
        if (i === 0) {
          button.textContent += textButton[i].toUpperCase(); // Primeira letra em maiúscula
        }else {
          button.textContent += textButton[i];
        }
      }, 100 * i);//Tempo de intervalo
    }
}

function addStyleButtons(button, tabId) {
  //Verifica o Id da função, filtra e joga suas respectivas classes
  if (tabId === 'jogos') {
    button.classList.add('active');
    button.classList.add('jogos');
  }
  if (tabId === 'rankings') {
    button.classList.add('active');
    button.classList.add('rankings'); 
  }
  if (tabId === 'perfil') {
    button.classList.add('active');
    button.classList.add('perfil');
  }
  if (tabId === 'versões') {
    button.classList.add('active');
    button.classList.add('versões');
  }
}


const lines = document.querySelectorAll('#ranking-table tr');//Seleciona as linhas da tabela
lines.forEach(line => {//Irá rodar todas as linhas
  line.addEventListener('click', () => {//Adiciona o evento de click para as linhas
    // Remove a classe 'selected' de todas as linhas
    lines.forEach(l => l.classList.remove('selected'));
    
    // Adiciona a classe 'selected' à linha clicada
    line.classList.add('selected');
  });
});

//Essa função irá servir para mostrar o conteúdo da tabela, e adicionar o CSS ao botão
function showTabVersoes(btnId, tableId){
  const buttons = document.querySelectorAll('.btn-img');

  buttons.forEach(button => {
    button.classList.remove('active');//Remove a classe active de todos os botões
  });

  const tables = document.querySelectorAll('.tabVersoes');

  tables.forEach(tab => {
    tab.classList.remove('active');//Remove a classe active de todas as tabelas, escondendo-as
  });
  
  const button = document.getElementById(btnId);//Vai selecionar apenas aquele botão com o seu respectivo Id, setado na chamada da função
  button.classList.add('active');//Adiciona a classe active a ele

  const table = document.getElementById(tableId);//Vai selecionar apenas aquela tabela com o seu respectivo Id, setado na chamada da função
  table.classList.add('active');//Adiciona a classe active a ela
}
