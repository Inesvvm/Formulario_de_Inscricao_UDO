function enviar(){
    const Nomes= document.getElementById("Nome"); // cria uma constante e vai pegar o elemento Nome do formulário
    const Endereco_Email= document.getElementById("Email");
    var Idades=document.getElementById("Idade");
    var Telefone=document.getElementById("Telemovel");

    if(Nomes.value.trim()==="")//.value.trim() serve para que os campos não fiquem vazios mesmo co o espaço
        alert("Tem de prencher o campo Nome!");

    else if(Nomes.value.length<3)// verifia se o Nome tem no minimo 3 letras.
        alert("O campo Nome tem de ter no minímo 3 letras!");

    else if(Endereco_Email.value.trim()==="")//verifica se o campo não está vazio
        alert("Tem de preencher o campo do email!");

    else if(!Endereco_Email.value.includes('@') || !Endereco_Email.value.endsWith('gmail.com'))//verifica se campo o tem @ e termina com gmail.com
        alert("Tem de ser um email!");
    
    else if(Idades.value === "")
        alert("Tem de preencher o campo idade!");//verifica se o campo não está vazio
    
    else if(Idades.value<4 || Idades.value>100)//verifica se o a idade é valida
        alert("Tem de inserir uma idade válida!");

    else if(Telefone.value==="")//verifica se o campo não está vazio
        alert("Tem de preencher o campo Telefone!");

    else if(Telefone.value.length <9)//verifica se o campo tem 9 digitos
        alert("Tem de ter nove digitos!");

    else
        alert("Formulário enviado com sucesso!");

}