const iconos=document.getElementsByClassName("iconos");

function iconoshover(x)
    {
        iconos[x].innerHTML="<p><button class='botoniconos'><i class='fas fa-trash'></i></button></p> <p><button class='botoniconos'><i class='fas fa-pencil-alt'></i></button></p>"
    }
    
function puntoshover(){
        var x = document.getElementsByClassName("iconos");
        var i;
        for (i = 0; i < x.length; i++) {
        x[i].innerHTML="<p><button><i class='fas fa-ellipsis-h puntos'></i></button></p>"
        }
    }   


    






