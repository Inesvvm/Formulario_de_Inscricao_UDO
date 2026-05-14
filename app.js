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
const Cartao_Cidadao=document.getElementById("BI_CC");

    
        if(!Nome.checkValidity()){
            if(Nome.validity.valueMissing){
                Nome.style.border="2px solid red";
                Nome.setCustomValidity("Tem de inserir um nome");
                Nome.reportValidity();
                return false;
            }if(Nome.validity.tooShort){
                Nome.style.border="2px solid red";
                Nome.setCustomValidity("Tem de ter no minimo 3 letras");
                return false;
            }

        }if(!Data.checkValidity()){
            if(Data.validity.valueMissing){
                Data.style.border="2px solid red";
                Data.setCustomValidity("Tem de Inserir uma data");
                return false;
            }if(Data.validity.patternMismatch){
                Data.style.border="2px solid red";
                Data.setCustomValidity("Tem de serguir opadrão recomendado");
                return false;
            }

        }if(!Contribuinte.checkValidity()){
            if(Contribuinte.validity.valueMissing){
                Contribuinte.style.border="2px solid red";
                Contribuinte.checkValidity("Tem de Inserir o numero do contribuinte");
                Contribuinte.reportValidity();
                return false;
            }
        }if(Cartao_Cidadao.checkValidity){
            if(Cartao_Cidadao.valueMissing){
                Cartao_Cidadao.style.border="2px solid red";
                C
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

