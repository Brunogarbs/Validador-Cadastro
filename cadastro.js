document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário padrão 

    let password = document.getElementById('password');
    let Confirmpassword = document.getElementById('Confirmpassword');
    let firstNameInput = document.getElementById('firstname');
    let form = event.target;

    function validarpassword() {
        if (password.value !== Confirmpassword.value) {
            Confirmpassword.setCustomValidity("Senhas diferentes!");
            Confirmpassword.reportValidity();
            return false;
        } else {
            Confirmpassword.setCustomValidity("");
            return true;
        }
    }

    if (form.checkValidity() && validarpassword()) {
        // Salva o primeiro nome no localStorage
        localStorage.setItem("firstName", firstNameInput.value);
        // Redireciona para a página upload.html
        window.location.href = "upload.html";
    }
    
});
