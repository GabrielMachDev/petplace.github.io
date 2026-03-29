// Seletores
const form = document.getElementById("cadastroForm");
const senha = document.getElementById("senhaCliente");
const confirmaSenha = document.getElementById("confirmaSenha");
const termos = document.getElementById("termos");
const botao = form.querySelector("button[type='submit']");
const strength = document.getElementById("senhaStrength");
const cpf = document.getElementById("cpfCliente");
const telefone = document.getElementById("telefoneCliente");

// Máscara para CPF (000.000.000-00)
cpf.addEventListener("input", () => {
  let value = cpf.value.replace(/\D/g, ""); // remove não dígitos
  if (value.length > 11) value = value.slice(0, 11);
  cpf.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
});

// Máscara para Telefone ((00) 00000-0000)
telefone.addEventListener("input", () => {
  let value = telefone.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);
  if (value.length <= 10) {
    telefone.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else {
    telefone.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  }
});

// Força da senha
senha.addEventListener("input", () => {
  if (senha.value.length < 6) {
    strength.textContent = "Senha fraca";
    strength.style.color = "red";
  } else if (senha.value.length < 10) {
    strength.textContent = "Senha média";
    strength.style.color = "orange";
  } else {
    strength.textContent = "Senha forte";
    strength.style.color = "green";
  }
});

// Confirmação de senha em tempo real
confirmaSenha.addEventListener("input", () => {
  if (confirmaSenha.value !== senha.value) {
    confirmaSenha.setCustomValidity("As senhas não coincidem");
  } else {
    confirmaSenha.setCustomValidity("");
  }
});

// Habilitar botão apenas se termos forem aceitos
termos.addEventListener("change", () => {
  botao.disabled = !termos.checked;
});

// Validação final no envio
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
    return;
  }

  alert("Cadastro realizado com sucesso!");
  form.reset();
  botao.disabled = true;
  strength.textContent = "";
});