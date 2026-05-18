const Seguinte_pagina=Array.from(document.querySelectorAll(".Paginas"));//O querySelectorAll seleciona todas as classes que tem Paginas
const Botoes_Form=Array.from(document.querySelectorAll(".Botao_Form"));

const Inserir_input=document.querySelector("#Inserir_Foto");//Busca os dados atuais do input
const Inserir_Img=document.querySelector(".upload");//Vai ser o local para inserir a imagem
const Text_Img='Insira uma Foto sua';
let cont=0;//Variavel para mudar de página
let i=0;//Variavel para o conteudo da Seguinte_pagina

Inserir_Img.innerHTML=Text_Img;//Serve pra mudar o texto quando for lido;

Seguinte_pagina.forEach((pagina)=>{
    pagina.style.display="none";
});//Serve para aplicar em todos os elemetos da Pag_seguinte e pagina é uma varialvel temporaria com um nome a minha escolha


function Botoes_Pag(i){
    Botoes_Form.forEach((Botoes_desativados)=>{
        Botoes_desativados.style.display="none";
    });

    if(i==0){
        Botoes_Form[1].style.display="block";//Butao Proxima Página
    }else if(i==1||i==2||i==3){
        Botoes_Form[0].style.display="block";//Butao Página Anterior
        Botoes_Form[1].style.display="block";//Butao Proxima Página
    }else if(i==4){
        Botoes_Form[0].style.display="block";//Butao Página Anterior
        Botoes_Form[2].style.display="block";//Butao Enviar
    }
}

Seguinte_pagina[0].style.display="block";//Serve para o Primeiro elemento  ficar visivel
Botoes_Pag(0);


Inserir_input.addEventListener("change", function(event){//serve para quando for colocar uma imagem do input
    const busca_arquivo=event.target;//busca o sitio onde está a imagem
    const busca_file=busca_arquivo.files[0];//pega na imagem

    if(busca_file){
        const le_arquivo= new FileReader();//le a imagem que foi pegada

        le_arquivo.addEventListener("load",function(event){//carrega a imagem
            const Le_objetivo=event.target;//vai buscar a imagem

            const img=document.createElement('img');//cria a tag para a imagem para ser colocada lá
            img.src =Le_objetivo.result;//Cola o resultado da leitura no link da imagem
            img.classList.add('Inserir_Imagem');

            Inserir_Img.innerHTML="";//o texto é apagado para ser colocada a imagem
            Inserir_Img.appendChild(img); //Coloca a nova <img> dentro do círculo visível do HTML
        });
        le_arquivo.readAsDataURL(busca_file);//coloca o a imagem
    }else{
        Inserir_Img.innerHTML=Text_Img;//Fica o texto se a ação for cancelada
    }
});



//Serve para verificar os elementos 
function Letras(id){
    const So_Letras=document.getElementById(id);
    if(So_Letras){
        So_Letras.maxLength=150;
        So_Letras.minLength=3;
    
        So_Letras.oninput=function(){
            this.value=this.value.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]/g, ''); //oniput serve para aceitar apaenas letras neste campo
        };
    }
}//Serve para Nome, Localidade, Nome_Pai, Prof_Pai, Nome_Mãe, Prof_Mãe 

function Numeros(id){
    const So_Num=document.getElementById(id);
    if(So_Num){
        So_Num.oninput=function(){
                this.value=this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        };
    }
}//Nif, Cod_Postal, Tel, Tel_Pai, Tel_Mae, Tel_Urgente, Idade_Pai, Idade_Mae


function Tipos(id, formato){
    const Padrao= document.getElementById(id);
    if(!Padrao){//Para se o campo não existir
        return;
    }

    const Tel_Numeric={//serve para o formato buscar um destes valores
        "Tel":{
            inputMode:"tel"
            //Para Tel, Tel_Pai, Tel_Mae, Tel_Urgente
        },
        "Numeric":{
            inputMode:"numeric"
            //Para NIF, codigo_Postal, Idade_Pai, Idade_Mae 
        }
    };
    if(Tel_Numeric[formato]){
        Padrao.inputMode=Tel_Numeric[formato].inputMode;
    }
}

function Tamanhos_e_Patterns(id, tamanho_conteudo){
    const tamanhoPattern=document.getElementById(id);
    if(!tamanhoPattern){//Para se o campo não existir
        return;
    }
    const Max_Min={
        "Telefone":{
            maxLength:9,
            minLength:9,
            pattern: "[0-9]{9}"
            //Para Tel, Tel_Pai, Tel_Mae, Tel_Urgente
        },
        "NIF":{
            maxLength:9,
            minLength:9,
            pattern:"[0-9]{9}"
            //Para NIF
        },
        "Cartao_BI":{
            maxLength:14,
            minLength:14,
            pattern:"[0-9]{8} [0-9]{1} [A-Z]{2}[0-9]{1}"
            //Para BI_CC
        },
        "Cod_Postal":{
            maxLength:8,
            minLength:8,
            pattern:"[0-9]{4}-[0-9]{3}"
            //Para Código Postal
        },
        "Idade":{
            maxLength:2,
            minLength:2,
            pattern:"[0-9]{2}"
            //Idade_Pai e Idade_Mae
        },
        "Altura":{
            maxLength:7,
            minLength:7,
            pattern:"[0-9]{1}m [0-9]{2}cm"
            //Altura_Pai e Altura_Mae
        }
    };

    if(Max_Min[tamanho_conteudo]){
        tamanhoPattern.maxLength=Max_Min[tamanho_conteudo].maxLength;
        tamanhoPattern.minLength=Max_Min[tamanho_conteudo].minLength;
        tamanhoPattern.pattern=Max_Min[tamanho_conteudo].pattern;
    }
}









//Inicio Fucção que vai para a página seguinte
    function Proxima_Pag(){
        cont++;

        for(i=0; i<Seguinte_pagina.length; i++){
            Seguinte_pagina[i].style.display="none";
        }
        Seguinte_pagina[cont].style.display="block";
        Botoes_Pag(cont);
    }
        
//Fim Fucção que vai para a página seguinte


//Inicio Fucção que vai para a página anterior
function Pag_Anterior(){
    cont--;
    for(i=0; i<Seguinte_pagina.length; i++){
        Seguinte_pagina[i].style.display="none";
    }
    Seguinte_pagina[cont].style.display="block";
    Botoes_Pag(cont);
}
//Fim Funcção que vai para a página seguinte

