document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  if (nome !== "" && email !== "") {
    alert("Prontinho! Você receberá as novidades por e-mail.");
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}