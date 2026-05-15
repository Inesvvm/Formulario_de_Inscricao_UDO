const Seguinte_pagina=Array.from(document.querySelectorAll(".Paginas"));//O querySelectorAll seleciona todas as classes que tem Paginas
Seguinte_pagina.forEach((pagina)=>{
    pagina.style.display="none";
});//Serve para aplicar em todos os elemetos da Pag_seguinte e pagina é uma varialvel temporaria com um nome a minha escolha
Seguinte_pagina[0].style.display="block";//Serve para o Primeiro elemento  ficar visivel

let cont=0;//Variavel para mudar de página
let i=0;//Variavel para o conteudo da Seguinte_pagina

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

