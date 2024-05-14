let password = document.getElementById('password');
let Confirmpassword = document.getElementById('Confirmpassword');
let firstNameInput = document.getElementById('firstname');

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

Confirmpassword.addEventListener('input', validarpassword);

function SalvaNome() {
    if (validarpassword()) {
        // Salva o primeiro nome no localStorage
        localStorage.setItem("firstName", firstNameInput.value);
        // Redireciona para a página upload.html
        window.location.href = "upload.html";
    }
}

document.getElementById("continue-button").addEventListener("click", function(event){
    event.preventDefault();
    SalvaNome();
});