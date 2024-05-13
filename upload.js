function getFirstName() {
    // Obtém o primeiro nome do localStorage
    let firstName = localStorage.getItem("firstName");
    
    // Verifica se o primeiro nome existe no localStorage
    if (firstName) {
        // Atualiza o elemento HTML com o primeiro nome
        document.getElementById("name").textContent = firstName;
    } else {
        // Se não houver primeiro nome, exibe uma mensagem padrão
        document.getElementById("name").textContent = "Usuário";
    }
}

// Chama a função ao carregar a página
getFirstName();

document.getElementById('fileInput').addEventListener('change', function() {
    var fileInput = document.getElementById('fileInput');
    var fileLabel = document.getElementById('fileLabel');
    if (fileInput.files.length > 0) {
        fileLabel.textContent = fileInput.files[0].name;
    } else {
        fileLabel.textContent = '';
    }
});
