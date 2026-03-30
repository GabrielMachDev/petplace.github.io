const formContato = document.getElementById("contatoForm");
const nomeContato = document.getElementById("nomeContato");
const emailContato = document.getElementById("emailContato");
const mensagemContato = document.getElementById("mensagemContato");
const mensagemSucessoContato = document.getElementById(
  "mensagemSucessoContato",
);

// Validação em tempo real do nome
nomeContato.addEventListener("input", () => {
  if (!nomeContato.value.trim()) {
    nomeContato.setCustomValidity("Informe seu nome");
  } else {
    nomeContato.setCustomValidity("");
  }
});

// Validação em tempo real do email
emailContato.addEventListener("input", () => {
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(emailContato.value)) {
    emailContato.setCustomValidity("Informe um email válido");
  } else {
    emailContato.setCustomValidity("");
  }
});

// Validação em tempo real da mensagem
mensagemContato.addEventListener("input", () => {
  if (!mensagemContato.value.trim()) {
    mensagemContato.setCustomValidity("Digite sua mensagem");
  } else {
    mensagemContato.setCustomValidity("");
  }
});

// Validação final no envio
formContato.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formContato.checkValidity()) {
    event.stopPropagation();
    formContato.classList.add("was-validated");
    return;
  }

  // Mensagem de confirmação
  mensagemSucessoContato.textContent = "✅ Mensagem enviada com sucesso!";
  mensagemSucessoContato.style.color = "green";

  // Resetar formulário
  formContato.reset();
  formContato.classList.remove("was-validated");
});
