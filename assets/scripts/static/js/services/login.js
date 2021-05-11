const most=document.getElementsByClassName("mostrarusu")[0];

function admin(){
    fetch("http://localhost:5500/admin")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        const results=data;
        console.log(data);
        if(data[0].PERFIL==='Admin'){
            console.log("usuariooooooooooooooo admin");
            const bbbot= `
            <button id="mostrarusuarios" onclick="displayusers()">Usuarios</button>`;
            most.innerHTML=bbbot;
        }
        else{
            most.innerHTML.innerHTML="";
        }
  });
};


document.getElementById("ingresar").addEventListener("click", 
function(){
    const data = { 
    USER:document.getElementById("usuario").value,
    PASS:document.getElementById("pass").value
};

    fetch('http://localhost:5500/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) =>{
        if (response.status === 200) {
            admin();
            document.getElementsByClassName("modallogin")[0].style.display="none";
          } else {
            console.log('error.');
          }
    })
});