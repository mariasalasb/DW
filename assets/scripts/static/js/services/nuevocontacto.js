function crearnuevocontacto(){
    document.getElementsByClassName("modalcontacto")[0].style.display="block";
}

function background(id){
    document.getElementById(id).style.background = "white";
};

let nombre=document.getElementById("name");
let lastname=document.getElementById("lastname");
let cargo=document.getElementById("cargo");
let mail=document.getElementById("mail");
let company=document.getElementById("company");
let nombre2=document.getElementById("name2");
let lastname2=document.getElementById("lastname2");
let cargo2=document.getElementById("cargo2");
let mail2=document.getElementById("mail2");
let company2=document.getElementById("company2");

function cerrarnuevocontacto(){
  document.getElementsByClassName("modalcontacto")[0].style.display="none";
  document.getElementById("newcontact").reset();
  document.getElementsByClassName("foto2")[0].src="./img/default-user.png" ;
  document.querySelectorAll('#cuenta, #cuenta2').forEach((el) =>{el.value=""; el.style.background = " #E5E5E5";} );
  document.querySelectorAll('#preferencias, #preferencias2, #ciudad, #pais').forEach((el) =>{ el.style.background = " #E5E5E5"} );
  document.querySelectorAll('#preferencias, #preferencias2').forEach((el) =>{el.value=""; el.selectedIndex = "Sin Preferencias";} );
  document.querySelectorAll('#ciudad, #pais, #selector_porcentajes').forEach((el) =>{el.value=""; el.selectedIndex = 0;} )
};

window.onload = botones();
function botones()
{
    if(nombre.value.length<1 ||lastname.value.length<1 ||cargo.value.length<1||mail.value.length<1||company.value.length<1) {
      document.getElementById("guardar").disabled=true;
      document.getElementById("cancelar").disabled=true;
    }
    else{
      document.getElementById("guardar").disabled=false;
      document.getElementById("cancelar").disabled=false;
    } 
};

document.getElementsByClassName("foto2")[0].addEventListener("click",file);
document.getElementsByClassName("camara")[0].addEventListener("click",file);


///SUBIR Y MOSTRAR IMAGEN EN FORMULARIO
function file(){
  document.getElementById("file").click();
}

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementsByClassName("foto2")[0];
          img.onload = () => {
              URL.revokeObjectURL(img.src);  // no longer needed, free memory
          }

          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
  });
});

////LLENAR SLIDER SEGUN INTERES
var slider = document.getElementById("myRange");
slider.oninput = function() {
  document.getElementById("selector_porcentajes").value = this.value;
}
sliderfills = document.querySelectorAll(".sliderfill");
document.getElementById("selector_porcentajes").onchange = function() {
  slider.value = this.value;
}

var slider2=document.getElementById("myRange2");
slider2.oninput = function() {
  document.getElementById("selector_porcentajes2").value = this.value;
}
sliderfills = document.querySelectorAll(".sliderfill");
document.getElementById("selector_porcentajes2").onchange = function() {
  slider2.value = this.value;
}

///AGREGAR NUEVO CONTACTO
document.getElementById("guardar").addEventListener("click", 
function(){
    const data = { 
    NOMBRE:document.getElementById("name").value,
    APELLIDO:document.getElementById("lastname").value,
    MAIL:document.getElementById("mail").value,
    PAIS:document.getElementById("pais").value,
    REGION:document.getElementById("region").value,
    COMPANIA:document.getElementById("company").value,
    CARGO:document.getElementById("cargo").value,
    INTERES:document.getElementById("selector_porcentajes").value,
    CIUDAD:document.getElementById("ciudad").value,
    DIRECCION:document.getElementById("direccion").value,
    TWITTER:document.getElementById("cuenta").value,
    PREFERENCIATW:document.getElementById("preferencias").value,
    FACEBOOK:document.getElementById("cuenta2").value,
    PREFERENCIAFB:document.getElementById("preferencias2").value
};

    fetch('http://localhost:5500/add/contact', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) =>{
        if (response.status === 200) {
            console.log('Contacto creado con éxito');
            cerrarnuevocontacto()
            return response.json();
          } else {
            console.log('error.');
          }
    })
})

////EDITAR CONTACTO

function cerrareditor(){
  document.getElementsByClassName("modalcontacto2")[0].style.display="none";
}

/* window.onload = botones2();*/
function botones2()
{
    if(nombre2.value.length<1 ||lastname2.value.length<1 ||cargo2.value.length<1||mail2.value.length<1||company2.value.length<1) {
      document.getElementById("guardar2").disabled=true;
      document.getElementById("cancelar2").disabled=true;
    }
    else{
      document.getElementById("guardar2").disabled=false;
      document.getElementById("cancelar2").disabled=false;
    } 
}; 

function editarcontacto(event){
  document.getElementsByClassName("modalcontacto2")[0].style.display="block";

  var id = event.target.id;

  document.getElementById("cancelar2").addEventListener("click", function() {

    document.getElementsByClassName("modaleliminar")[0].style.display="block";

    document.getElementById("cancel").addEventListener("click", function() {
        document.getElementsByClassName("modaleliminar")[0].style.display="none";
    })

    document.getElementById("eliminar").addEventListener("click", function() {
    fetch('http://localhost:5500/delete/contact?id='+id, {
        method: 'DELETE'})
    .then((response) =>{
        if (response.status === 200) {
            document.getElementsByClassName("modaleliminar")[0].style.display="none";
            document.getElementsByClassName("modalcontacto2")[0].style.display="none";
            alert("Contacto borado");
            buscarcontactos(0);
        } else {
            console.log('error.');
        }
    })
  })
});

  document.getElementById("guardar2").addEventListener("click", function(){
 
      const data = { 
      NOMBRE:document.getElementById("name2").value,
      APELLIDO:document.getElementById("lastname2").value,
      MAIL:document.getElementById("mail2").value,
      PAIS:document.getElementById("pais2").value,
      REGION:document.getElementById("region2").value,
      COMPANIA:document.getElementById("company2").value,
      CARGO:document.getElementById("cargo2").value,
      INTERES:document.getElementById("selector_porcentajes2").value,
      CIUDAD:document.getElementById("ciudad2").value,
      DIRECCION:document.getElementById("direccion2").value,
      TWITTER:document.getElementById("cuenta22").value,
      PREFERENCIATW:document.getElementById("preferencias22").value,
      FACEBOOK:document.getElementById("cuenta222").value,
      PREFERENCIAFB:document.getElementById("preferencias222").value
  };
  
      fetch('http://localhost:5500/update/contact?id='+ id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) =>{
          if (response.status === 200) {
              console.log('Contacto actualizado con éxito');
              cerrareditor()
              buscarcontactos(0);
              return response.json();
            } else {
              console.log('error.');
            }
      })
    });


  fetch("http://localhost:5500/search/contact?id="+ id)
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        console.log(data);
        const results=data;
        results.forEach( contact => {
    
          document.getElementById("name2").value=contact.NOMBRE;
          document.getElementById("lastname2").value=contact.APELLIDO;
          document.getElementById("mail2").value=contact.MAIL;
          document.getElementById("pais2").value=contact.PAIS;
          document.getElementById("region2").value=contact.REGION;
          document.getElementById("company2").value=contact.COMPANIA;
          document.getElementById("cargo2").value=contact.CARGO;
          document.getElementById("selector_porcentajes2").value=contact.INTERES;
          document.getElementById("ciudad2").value=contact.CIUDAD;
          document.getElementById("direccion2").value=contact.DIRECCION;
          document.getElementById("cuenta22").value=contact.TWITTER;
          document.getElementById("preferencias22").value=contact.PREFERENCIATW;
          document.getElementById("cuenta222").value=contact.FACEBOOK;
          document.getElementById("preferencias222").value=contact.PREFERENCIAFB;
          document.getElementById("myRange2").value=contact.INTERES;
            
            });
        }); 

};
