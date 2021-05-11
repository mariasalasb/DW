///DESHABILITAR LINK DE USUARIOS
const moss=document.getElementsByClassName("mostrarusu")[0];

    fetch("http://localhost:5500/admin")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        const results=data;
        console.log(data);
        if(data[0].PERFIL==='Admin'){
            console.log("usuariooooooooooooooo admin");
            const bbbot= `
            <button id="mostrarusuarios" onclick="displayusers()">Usuarios</button>`;
            moss.innerHTML=bbbot;
        }
        else{
            moss.innerHTML.innerHTML="";
        }
  });
