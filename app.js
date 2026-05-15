const Seguinte_pagina=Array.from(document.querySelectorAll(".Paginas"));//O querySelectorAll seleciona todas as classes que tem Paginas
Seguinte_pagina.forEach((pagina)=>{
    pagina.style.display="none";
});//Serve para aplicar em todos os elemetos da Pag_seguinte e pagina é uma varialvel temporaria com um nome a minha escolha
Seguinte_pagina[0].style.display="block";//Serve para o Primeiro elemento  ficar visivel

let cont=0;//Variavel para mudar de página
let i=0;//Variavel para o conteudo da Seguinte_pagina

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
    }
        
//Fim Fucção que vai para a página seguinte

//Inicio Fucção que vai para a página anterior
function Pag_Anterior(){
    cont--;
    for(i=0; i<Seguinte_pagina.length; i++){
        Seguinte_pagina[i].style.display="none";
    }
    Seguinte_pagina[cont].style.display="block";
}
//Fim Funcção que vai para a página seguinte

