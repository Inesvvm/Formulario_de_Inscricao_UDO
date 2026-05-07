function enviar(){
    const Nomes= document.getElementById("Nome"); // cria uma constante e vai pegar o elemento Nome do formulário
    const Endereco_Email= document.getElementById("Email");
    var Idades=document.getElementById("Idade");
    

    if(Nomes.value.trim()==="")//.value.trim() serve para que os campos não fiquem vazios mesmo co o espaço
        alert("Tem de prencher o campo Nome");

    else if(Endereco_Email.value.trim()==="")
        alert("Tem de preencher o campo do email!");
    
    else if(Idades.value === "")
        alert("Tem de preencher o campo idade!");
    
    else if(Idades.value<1 || Idades.value>100)
        alert("Tem de inserir uma idade válida!");
    else
        alert("Formulário enviado com sucesso");

}