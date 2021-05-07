document.getElementById("mostrarusuarios").addEventListener("click", function (){
    document.querySelectorAll('#footer, #grilla, #buscar,#companias, #regiones').forEach((el) =>{ el.style.display = " none";} );
    document.getElementById("usuarios").style.display="block";
    window.onload = buscarusuarios();

});

function borrarusuario(event){
    var id = event.target.id;
    document.getElementsByClassName("modaleliminar3")[0].style.display="block";

    document.getElementById("cancel3").addEventListener("click", function() {
    document.getElementsByClassName("modaleliminar3")[0].style.display="none";
    })

    document.getElementById("eliminar3").addEventListener("click", function() {
        fetch('http://localhost:5500/delete/user?id='+id, {
            method: 'DELETE'})
        .then((response) =>{
            if (response.status === 200) {
                document.getElementsByClassName("modaleliminar3")[0].style.display="none";
                alert("Usuario borrado");
                buscarusuarios(0);
            } else {
                console.log('error.');
            }
        })
    })
};

function cerrarnuevousuario2(){
    document.getElementsByClassName("modalusuario2")[0].style.display="none";
    document.getElementById("newuser2").reset();
};

function editarusuario(event){
    document.getElementsByClassName("modalusuario2")[0].style.display="block";
    document.getElementById("deleteuser2").style.display="block";
    document.getElementById("guardarusuario2").style.marginLeft="400px";
    document.getElementById("guardarusuario2").style.marginTop="0px";

    var id = event.target.id;
  
    document.getElementById("deleteuser2").addEventListener("click", function() {
  
      document.getElementsByClassName("modaleliminar3")[0].style.display="block";
  
      document.getElementById("cancel3").addEventListener("click", function() {
          document.getElementsByClassName("modaleliminar3")[0].style.display="none";
      })
  
      document.getElementById("eliminar3").addEventListener("click", function() {
        fetch('http://localhost:5500/delete/user?id='+id, {
            method: 'DELETE'})
        .then((response) =>{
            if (response.status === 200) {
                document.getElementsByClassName("modaleliminar3")[0].style.display="none";
                document.getElementsByClassName("modalusuario2")[0].style.display="none";
                alert("Usuario borrado");
                buscarusuarios(0);
            } else {
                console.log('error.');
            }
        })
    })
  });
  
const p=document.getElementById("passuser2");
const pss2=document.getElementById("pass22");

    document.getElementById("guardarusuario2").addEventListener("click", function(){
        if(pss2.value!=p.value) {
            alert("La contraseña debe ser igual en ambos campos");
            return false;
        }
        else{
            const data = { 
            NOMBRE:document.getElementById("nameuser2").value,
            APELLIDO:document.getElementById("lastnameuser2").value,
            EMAIL:document.getElementById("mailuser2").value,
            PERFIL:document.getElementById("perfil2").value,
            USUARIO:document.getElementById("user2").value,
            PASSWORD:document.getElementById("passuser2").value,
        };
        
            fetch('http://localhost:5500/update/user?id='+ id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) =>{
                if (response.status === 200) {
                    console.log('Contacto actualizado con éxito');
                    cerrarnuevousuario2()
                    buscarusuarios(0);
                } else {
                    console.log('error.');
                }
            })
            return true;
        }
      });
  
  
    fetch("http://localhost:5500/search/user?id="+ id)
      .then( tipoDeDato => tipoDeDato.json())
      .then(data => {
          console.log(data);
          const results=data;
          results.forEach( contact => {
      
            document.getElementById("nameuser2").value=contact.NOMBRE;
            document.getElementById("lastnameuser2").value=contact.APELLIDO;
            document.getElementById("mailuser2").value=contact.EMAIL;
            document.getElementById("perfil2").value=contact.PERFIL;
            document.getElementById("user2").value=contact.USUARIO;
            document.getElementById("passuser2").value=contact.PASSWORD;
            document.getElementById("pass22").value=contact.PASSWORD;              
              });
          }); 
  
  };

var filtro='NOMBRE';
const listausuarios=document.querySelector('.listadeusuarios')


function buscarusuarios(){
    fetch("http://localhost:5500/view/user-list?filtro=" + filtro )
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        console.log(data);
        listausuarios.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const perfil = contact.PERFIL;
            const mail=contact.EMAIL;
            const nombre=contact.NOMBRE;
            const apellido=contact.APELLIDO;
            const id=contact.ID;
    
            const contacto= `
            <div class="colu-2 ">
                    <input type="checkbox"  id="${id}" class="checkbox">
                </div>
                <div class="col-12 colu-2">
                    <p> ${nombre}  </p>
                </div>
                <div class=" colu-2">
                    <p> ${apellido} </p>
                </div>
                <div class="colu-2">
                    <p> ${mail} </p>
                </div>
                <div class="colu-2">
                    <p> ${perfil} </p>
                </div>
                <div class="colu-2 iconos row">
                    <p><button class="puntos"><i class="fas fa-ellipsis-h puntos"></i></button></p>
                    <p> <button class='botoniconos' onclick="borrarusuario(event)" id=${id}"><i class='fas fa-trash' id=${id}></i></button></p>
                    <p><button class='botoniconos' id=${id} onclick="editarusuario(event)"><i class='fas fa-pencil-alt' id=${id}></i></button></p>
                </div>
            `;
            
            const listItem = document.createElement('div');
            listItem.classList.add("row", "filagrilla");
            listItem.setAttribute("id", id);
            listItem.innerHTML=contacto;
            listausuarios.appendChild(listItem);     
    
            });
    }); 
};

function cerrarnuevousuario(){
    document.getElementsByClassName("modalusuario")[0].style.display="none";
    document.getElementById("newuser").reset();
};



function crearnuevousuario(){
    document.getElementsByClassName("modalusuario")[0].style.display="block";
    document.getElementById("deleteuser").style.display="none";
    document.getElementById("guardarusuario").style.marginLeft="400px";

const pass=document.getElementById("passuser");
const pass2=document.getElementById("pass2");

document.getElementById("guardarusuario").addEventListener("click",function(){
    if(pass2.value!=pass.value) {
        alert("La contraseña debe ser igual en ambos campos");
        return false;
    }
    else{
            const data = { 
            NOMBRE:document.getElementById("nameuser").value,
            APELLIDO:document.getElementById("lastnameuser").value,
            EMAIL:document.getElementById("mailuser").value,
            PERFIL:document.getElementById("perfil").value,
            USUARIO:document.getElementById("user").value,
            PASSWORD:document.getElementById("passuser").value,
        };
        
            fetch('http://localhost:5500/add/user', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
            .then((response) =>{
                if (response.status === 200) {
                    console.log('Usuario creado con éxito');
                    cerrarnuevousuario();
                    buscarusuarios();
                  } else {
                    alert('Error, usuario no creado, valide los datos.');
                  }
            })
            return true;
    } 
})

};
