
window.onload = sesionactiva();

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        sesionactiva();
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

function sesionactiva(){
    fetch('http://localhost:5500/session', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) =>{
        const usuariologeado=document.cookie.user;
        if (response.status === 500) {
            document.getElementsByClassName("modallogin")[0].style.display="block";        
          } 
        else if(response.USER==usuariologeado){
            document.getElementsByClassName("modallogin")[0].style.display="none";
        }
        else{
        }
    })
}
