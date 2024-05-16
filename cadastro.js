$(document).ready(function(){
    // Aplica a máscara de telefone
    $('#number').mask('(00) 00000-0000');

    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Impede o envio do formulário padrão

        let password = document.getElementById('password');
        let confirmpassword = document.getElementById('confirmpassword');
        let firstNameInput = document.getElementById('firstname');
        let phoneNumberInput = document.getElementById('number');
        let form = event.target;

        function validarpassword() {
            if (password.value !== confirmpassword.value) {
                confirmpassword.setCustomValidity("Senhas diferentes!");
                confirmpassword.reportValidity();
                return false;
            } else {
                confirmpassword.setCustomValidity("");
                return true;
            }
        }

        function validarNumeroTelefone() {
            // Verifica se o número de telefone está no formato correto
            let telefoneRegex = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
            if (!telefoneRegex.test(phoneNumberInput.value)) {
                phoneNumberInput.setCustomValidity("Formato inválido de telefone!");
                phoneNumberInput.reportValidity();
                return false;
            } else {
                phoneNumberInput.setCustomValidity("");
                return true;
            }
        }

        // Adiciona um listener ao campo de confirmação de senha para validar em tempo real
        confirmpassword.addEventListener('input', validarpassword);
        // Adiciona um listener ao campo de número de telefone para validar em tempo real
        phoneNumberInput.addEventListener('input', validarNumeroTelefone);
        
        // Verifica se o formulário é válido e se as senhas coincidem antes de prosseguir
        if (form.checkValidity() && validarpassword() && validarNumeroTelefone()) {
            // Salva o primeiro nome no localStorage
            localStorage.setItem("firstName", firstNameInput.value);
            // Redireciona para a página upload.html
            window.location.href = "upload.html";
        }
    });
});
