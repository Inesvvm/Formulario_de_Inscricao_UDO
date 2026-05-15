const Seguinte_pagina=Array.from(document.querySelectorAll(".Paginas"));//O querySelectorAll seleciona todas as classes que tem Paginas
Seguinte_pagina.forEach((pagina)=>{
    pagina.style.display="none";
});//Serve para aplicar em todos os elemetos da Pag_seguinte e pagina é uma varialvel temporaria com um nome a minha escolha
Seguinte_pagina[0].style.display="block";//Serve para o Primeiro elemento  ficar visivel

let cont=0;//Variavel para mudar de página
let i=0;//Variavel para o conteudo da Seguinte_pagina



function Letras(id){
    const So_Letras=document.getElementById(id);
    So_Letras.oninput=function(){
        this.value=this.value.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]/g, ''); //oniput serve para aceitar apaenas letras neste campo
    }
}//Serve para Nome, Localidade, Nome_Pai, Prof_Pai, Nome_Mãe, Prof_Mãe 

function Numeros(id){
    const So_Num=document.getElementById(id);
    So_Num.oninput=function(){
        this.value=this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    }
}//Nif, Cod_Postal, Tel, Tel_Pai, Tel_Mae, Tel_Urgente, Idade_Pai, Idade_Mae



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

