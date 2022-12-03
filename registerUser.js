
    var form = document.querySelector(".formCadastro");
    var nome = document.querySelector("#name");
    print(nome);

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    print(nome.value);

    // impede o envio do form
    e.preventDefault();
});