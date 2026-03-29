const listaCarrinho = document.getElementById("listaCarrinho");
const totalCarrinho = document.getElementById("totalCarrinho");

// Recupera itens do localStorage
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

if (carrinho.length === 0) {
  listaCarrinho.innerHTML = "<p class='text-center'>Seu carrinho está vazio.</p>";
  totalCarrinho.textContent = "";
} else {
  let total = 0;

  carrinho.forEach(item => {
    // Cria elemento para cada produto
    const div = document.createElement("div");
    div.classList.add("border", "rounded", "p-2", "mb-2");
    div.innerHTML = `<strong>${item.nome}</strong> - ${item.preco}`;
    listaCarrinho.appendChild(div);

    // Soma o preço (remove R$ e vírgula)
    const precoNumerico = parseFloat(item.preco.replace("R$", "").replace(",", "."));
    total += precoNumerico;
  });

  totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}