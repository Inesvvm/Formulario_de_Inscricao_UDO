const Primeira_Pag=document.getElementById("Pag_1");//Busca o Elemeto com o Id Pag_1
const Segunda_Pag=document.getElementById("Pag_2");//Busca o Elemeto com o Id Pag_2
const Terceira_Pag=document.getElementById("Pag_3");//Busca o Elemeto com o Id Pag_3
const Quarta_Pag=document.getElementById("Pag_4");//Busca o Elemeto com o Id Pag_4
let i=1;
let Pag1_certa=false;

function Verifica1(){
const Nome=document.getElementById("nome");
const Data=document.getElementById("data_Nascimento");
const Contribuinte=document.getElementById("NIF");

    Nome.setCustomValidity(""); 
        if(!Nome.checkValidity()){
            Nome.style.border="2px solid red";
            if(Nome.validity.valueMissing){
                Nome.setCustomValidity("Tem de inserir um nome");
                Nome.reportValidity();
                return false;
            }if(Nome.validity.tooShort){
                Nome.setCustomValidity("Tem de ter no minimo 3 letras");
                return false;
            }
        }if(Contribuinte.checkValidity()){
            Contribuinte.style.border="2px solid red";
            if(Contribuinte.valueMissing){
                Contribuinte.checkValidity("Tem de Inserir o numero do contribuinte");
                Nome.reportValidity();
                return false;
            }
        }
                return true;
}
//Inicio Fucção que vai para a página seguinte
    function Proxima_Pag(){
        if(!Verifica1()){
            return false;
        }
        i++;
        if(i==1){
            Primeira_Pag.style.display='block';//Faz que a 1ª Pagina fique visivel
            Segunda_Pag.style.display='none';//Faz que a 2ª Pagina fique escondida
            Terceira_Pag.style.display='none';//Faz que a 3ª Pagina fique escondida
            Quarta_Pag.style.display='none';//Faz que a 4ª Pagina fique escondida

        }else if(i==2){
            Primeira_Pag.style.display='none';//Faz que a 1ª Pagina fique escondida
            Segunda_Pag.style.display='block';//Faz que a 2ª Pagina fique visivel
            Terceira_Pag.style.display='none';//Faz que a 3ª Pagina fique escondida
            Quarta_Pag.style.display='none';//Faz que a 4ª Pagina fique escondida
        }else if(i==3){
            Primeira_Pag.style.display='none';//Faz que a 1ª Pagina fique escondida
            Segunda_Pag.style.display='none';//Faz que a 2ª Pagina fique escondida
            Terceira_Pag.style.display='block';//Faz que a 3ª Pagina fique visivel
            Quarta_Pag.style.display='none';//Faz que a 4ª Pagina fique escondida
        }else if(i==4){
            Primeira_Pag.style.display='none';//Faz que a 1ª Pagina fique escondida
            Segunda_Pag.style.display='none';//Faz que a 2ª Pagina fique escondida
            Terceira_Pag.style.display='none';//Faz que a 3ª Pagina fique escondida
            Quarta_Pag.style.display='block';//Faz que a 4ª Pagina fique visivel
        }

    }
//Inicio Fucção que vai para a página seguinte

//Inicio Fucção que vai para a página anterior
function Pag_Anterior(){
    i--;
    if(i==1){
        Primeira_Pag.style.display='block';//Faz que a 1ª Pagina fique visivel
        Segunda_Pag.style.display='none';//Faz que a 2ª Pagina fique escondida
        Terceira_Pag.style.display='none';//Faz que a 3ª Pagina fique escondida
        Quarta_Pag.style.display='none';//Faz que a 4ª Pagina fique escondida

    }else if(i==2){
        Primeira_Pag.style.display='none';//Faz que a 1ª Pagina fique escondida
        Segunda_Pag.style.display='block';;//Faz que a 2ª Pagina fique visivel
        Terceira_Pag.style.display='none';//Faz que a 3ª Pagina fique escondida
        Quarta_Pag.style.display='none';//Faz que a 4ª Pagina fique escondida
    }else if(i==3){
        Primeira_Pag.style.display='none';//Faz que a 1ª Pagina fique escondida
        Segunda_Pag.style.display='none';//Faz que a 2ª Pagina fique escondida
        Terceira_Pag.style.display='block';;//Faz que a 3ª Pagina fique visivel
        Quarta_Pag.style.display='none';//Faz que a 4ª Pagina fique escondida
    }else if(i==4){
        Primeira_Pag.style.display='none';//Faz que a 1ª Pagina fique escondida
        Segunda_Pag.style.display='none';//Faz que a 2ª Pagina fique escondida
        Terceira_Pag.style.display='none';//Faz que a 3ª Pagina fique escondida
        Quarta_Pag.style.display='block';;//Faz que a 4ª Pagina fique visivel
    }
}
//Fim Funcção que vai para a página seguinte

