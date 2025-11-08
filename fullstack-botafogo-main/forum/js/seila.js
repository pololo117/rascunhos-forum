const btnCfg = document.querySelector(".btn-Cfg");
const cfgModal = document.getElementById("cfg-modal");
const cfgCloseBtn = document.getElementById("cfg-close");
const cfgSubmitBtn = document.getElementById("cfg-submit");
const registerSubmitBtn = document.getElementById("cfg-submit");

function openModal(modalElement) {
  if (modalElement) modalElement.classList.add("open");
}

function closeModal(modalElement) {
  if (modalElement) modalElement.classList.remove("open");
}

// Abrir Modais ao clicar nos botões da navbar
if (btnEntrar && loginModal) {
  btnEntrar.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(loginModal);
  });
}

if (btnCadastrar && registerModal) {
  btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(registerModal);
  });
}

// Fechar Modais ao clicar no botão "Cancelar"
if (loginCloseBtn) {
  loginCloseBtn.addEventListener("click", () => {
    closeModal(loginModal);
  });
}

if (registerCloseBtn) {
  registerCloseBtn.addEventListener("click", () => {
    closeModal(registerModal);
  });
}

// Fechar Modais ao clicar no overlay (fora do conteúdo)
if (loginModal) {
  loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      closeModal(loginModal);
    }
  });
}

if (registerModal) {
  registerModal.addEventListener("click", (e) => {
    if (e.target === registerModal) {
      closeModal(registerModal);
    }
  });
}

// Lógica de Submissão (exemplo)
if (loginSubmitBtn) {
  loginSubmitBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const newPassword = document.getElementById("new-password").value;
    
    if (username && password) {
      alert(
        `Login efetuado para: ${username}. (A lógica de autenticação real iria aqui)`
      );
      closeModal(loginModal);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
}

