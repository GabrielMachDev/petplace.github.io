// Seletores principais
const formCadastro = document.getElementById("cadastroForm");
const nomeCliente = document.getElementById("nomeCliente");
const emailCliente = document.getElementById("emailCliente");
const telefoneCliente = document.getElementById("telefoneCliente");
const cpfCliente = document.getElementById("cpfCliente");
const enderecoCliente = document.getElementById("enderecoCliente");
const nomePet = document.getElementById("nomePet");
const especiePet = document.getElementById("especiePet");
const racaPet = document.getElementById("racaPet");
const idadePet = document.getElementById("idadePet");
const senhaCliente = document.getElementById("senhaCliente");
const confirmaSenha = document.getElementById("confirmaSenha");
const termos = document.getElementById("termos");
const mensagemSucesso = document.getElementById("mensagemSucesso");
const cpfFeedback = document.getElementById("cpfFeedback");
const senhaStrength = document.getElementById("senhaStrength");

// ----------------------
// Máscara CPF
// ----------------------
cpfCliente.addEventListener("input", () => {
  let cpf = cpfCliente.value.replace(/\D/g, "");
  if (cpf.length > 11) cpf = cpf.slice(0, 11);

  cpfCliente.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  if (cpf.length !== 11) {
    cpfCliente.setCustomValidity("CPF inválido");
    cpfFeedback.textContent = "CPF deve ter 11 dígitos.";
    cpfFeedback.style.color = "red";
  } else {
    cpfCliente.setCustomValidity("");
    cpfFeedback.textContent = "";
  }
});

// ----------------------
// Máscara Telefone
// ----------------------
telefoneCliente.addEventListener("input", () => {
  let tel = telefoneCliente.value.replace(/\D/g, "");
  if (tel.length > 11) tel = tel.slice(0, 11);

  if (tel.length <= 10) {
    telefoneCliente.value = tel.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else {
    telefoneCliente.value = tel.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  }

  if (tel.length < 10) {
    telefoneCliente.setCustomValidity("Telefone inválido");
  } else {
    telefoneCliente.setCustomValidity("");
  }
});

// ----------------------
// Validação força da senha
// ----------------------
senhaCliente.addEventListener("input", () => {
  const senha = senhaCliente.value;
  let strength = "Fraca";
  let color = "red";

  if (senha.length >= 6 && /[A-Z]/.test(senha) && /\d/.test(senha)) {
    strength = "Forte";
    color = "green";
  } else if (senha.length >= 6) {
    strength = "Média";
    color = "orange";
  }

  senhaStrength.textContent = `Força da senha: ${strength}`;
  senhaStrength.style.color = color;
});

// ----------------------
// Validação confirmação de senha
// ----------------------
confirmaSenha.addEventListener("input", () => {
  if (confirmaSenha.value !== senhaCliente.value) {
    confirmaSenha.setCustomValidity("As senhas não coincidem");
  } else {
    confirmaSenha.setCustomValidity("");
  }
});

// ----------------------
// Habilitar botão apenas se termos aceitos
// ----------------------
termos.addEventListener("change", () => {
  const botao = formCadastro.querySelector("button[type='submit']");
  botao.disabled = !termos.checked;
});

// ----------------------
// Validação final no envio
// ----------------------
formCadastro.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formCadastro.checkValidity()) {
    event.stopPropagation();
    formCadastro.classList.add("was-validated");
    return;
  }

  // Mensagem de sucesso
  mensagemSucesso.textContent = "Cadastro realizado com sucesso!";
  mensagemSucesso.classList.add("mensagem-sucesso");

  // Resetar formulário
  formCadastro.reset();
  formCadastro.classList.remove("was-validated");
  senhaStrength.textContent = "";
  cpfFeedback.textContent = "";

  // Remover mensagem após alguns segundos
  setTimeout(() => {
    mensagemSucesso.textContent = "";
    mensagemSucesso.classList.remove("mensagem-sucesso");
  }, 4000);
});