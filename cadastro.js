let password = document.getElementById('password');
let Confirmpassword = document.getElementById('Confirmpassword');

function validarpassword() {
  if (password.value != Confirmpassword.value) {
    Confirmpassword.setCustomValidity("Senhas diferentes!");
    Confirmpassword.reportValidity();
    return false;
  } else {
    Confirmpassword.setCustomValidity("");
    return true;
  }
}

// verificar também quando o campo for modificado, para que a mensagem suma quando as passwords forem iguais
Confirmpassword.addEventListener('input', validarpassword);

function SalvaNome(){
    
    // Salva o primeiro nome no localStorage
    localStorage.setItem("firstName", firstName);
    

  }