// Seletores principais
const formAgendamento = document.getElementById("formAgendamento");
const servico = document.getElementById("servico");
const dataAgendamento = document.getElementById("dataAgendamento");
const horaAgendamento = document.getElementById("horaAgendamento");
const mensagemAgendamento = document.getElementById("mensagemAgendamento");

// ----------------------
// Validação em tempo real do seletor de serviço
// ----------------------
servico.addEventListener("change", () => {
  if (servico.value === "") {
    servico.setCustomValidity("Selecione um serviço válido");
  } else {
    servico.setCustomValidity("");
  }
});

// ----------------------
// Validação em tempo real da data
// ----------------------
dataAgendamento.addEventListener("input", () => {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); // zera horas para comparar apenas a data
  const dataSelecionada = new Date(dataAgendamento.value);

  if (!dataAgendamento.value) {
    dataAgendamento.setCustomValidity("Informe uma data válida");
  } else if (dataSelecionada < hoje) {
    dataAgendamento.setCustomValidity("A data não pode ser anterior ao dia atual");
  } else {
    dataAgendamento.setCustomValidity("");
  }
});

// ----------------------
// Validação em tempo real da hora
// ----------------------
horaAgendamento.addEventListener("input", () => {
  if (!horaAgendamento.value) {
    horaAgendamento.setCustomValidity("Informe um horário válido");
    return;
  }

  const [hora, minuto] = horaAgendamento.value.split(":").map(Number);

  if (hora < 8 || hora > 18) {
    horaAgendamento.setCustomValidity("O horário deve ser entre 08h e 18h");
  } else {
    horaAgendamento.setCustomValidity("");
  }
});

// ----------------------
// Validação final no envio
// ----------------------
formAgendamento.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formAgendamento.checkValidity()) {
    event.stopPropagation();
    formAgendamento.classList.add("was-validated");
    return;
  }

  // Mensagem de confirmação
  mensagemAgendamento.textContent = "✅ Agendamento realizado com sucesso!";
  mensagemAgendamento.style.color = "green";

  // Resetar formulário
  formAgendamento.reset();
  formAgendamento.classList.remove("was-validated");
});