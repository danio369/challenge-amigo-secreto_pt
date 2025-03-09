let amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
  const nomeInput = document.getElementById('amigo'); // Pega o campo de entrada
  const nome = nomeInput.value.trim(); // Remove espaços extras do nome

  // Valida se o nome não está vazio
  if (nome === '') {
    alert('Por favor, insira um nome válido!');
    return;
  }

  // Adiciona o nome à lista de amigos
  amigos.push(nome);

  // Atualiza a lista visível na tela
  atualizarLista();

  // Limpa o campo de entrada
  nomeInput.value = '';
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; // Limpa a lista existente

  // Adiciona cada nome à lista
  amigos.forEach((nome) => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);
  });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia! Adicione nomes primeiro.');
    return;
  }

  // Sorteia um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Exibe o nome sorteado
  const resultadoSorteio = document.getElementById('resultado');
  resultadoSorteio.innerHTML = ''; // Limpa o resultado anterior

  const li = document.createElement('li');
  li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  resultadoSorteio.appendChild(li);
}
