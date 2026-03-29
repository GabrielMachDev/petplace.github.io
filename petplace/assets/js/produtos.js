// Seleciona todos os botões de compra e o contador do carrinho
const botoesCompra = document.querySelectorAll("section button");
const cartCount = document.getElementById("cartCount");

// Atualiza o contador do carrinho
function atualizarContador() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  cartCount.textContent = carrinho.length;
}

// Adiciona produto ao carrinho
function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContador();
}

// Exibe mensagem de confirmação temporária
function mostrarMensagem(botao, texto) {
  // Cria elemento de mensagem
  const mensagem = document.createElement("div");
  mensagem.textContent = texto;
  mensagem.classList.add("mensagem-sucesso");

  // Adiciona logo abaixo do botão
  botao.parentElement.appendChild(mensagem);

  // Remove automaticamente após 3 segundos
  setTimeout(() => {
    mensagem.remove();
  }, 3000);
}

// Configura os eventos de clique nos botões de compra
botoesCompra.forEach(botao => {
  botao.addEventListener("click", () => {
    const produtoNome = botao.parentElement.querySelector("h4").textContent;
    const produtoPreco = botao.parentElement.querySelector(".fw-bold").textContent;

    const produto = {
      nome: produtoNome,
      preco: produtoPreco
    };

    adicionarAoCarrinho(produto);

    // Mostra mensagem de confirmação sem precisar clicar
    mostrarMensagem(botao, `✅ ${produtoNome} foi adicionado ao carrinho!`);
  });
});

// Atualiza contador ao carregar a página
atualizarContador();