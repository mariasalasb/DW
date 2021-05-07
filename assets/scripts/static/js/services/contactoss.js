document.getElementById("mostrarcontactos").addEventListener("click", function (){
    document.querySelectorAll('#footer, #grilla, #buscar').forEach((el) =>{el.style.display = " block";} );
    document.querySelectorAll('#usuarios, #companias, #regiones').forEach((el) =>{ el.style.display = " none";} );
});

const listacontactos=document.querySelector('.listadecontactos')
cantidad=document.getElementById("filas").value;
filaspag=document.getElementById("filasenpagina");
filastot=document.getElementById("filastotales");
var filtro='ID';
window.onload = buscarcontactos(0,filtro);
window.onload=localStorage.removeItem('erase');


///DESHABILITAR LINK DE USUARIOS
fetch("http://localhost:5500/useradmin")
  .then((response) =>{
    if (response.status === 403) {
        document.getElementById("mostrarusuarios").style.visibility="hidden";
    } else {
        document.getElementById("mostrarusuarios").style.visibility="visible";
    }
});
        

///BUSCADOR
document.getElementById("lupa").addEventListener("click",function(){
    palabra=document.getElementById("buscador").value;
    document.getElementById("buscador").innerHTML="";
    sesionactiva();
    buscarcontactos(1);
});

////CAMBIAR # DE FILAS EN PANTALLA
document.getElementById("filas").addEventListener("change", function(){
    cantidad=0;
    cantidad=document.getElementById("filas").value;
    filaspag.innerHTML=cantidad;
    sesionactiva();
    buscarcontactos(0);
});

///BORRAR CONTACTO
function borrarcontacto(event){
    var id = event.target.id;
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
                alert("Contacto borrado");
                buscarcontactos(0);
            } else {
                console.log('error.');
            }
        })
    })
};


///FILTRAR SEGUN COLUMNAS EN PANTALLA
document.getElementById("filtrocontacto").addEventListener("click", function(){
     filtro='NOMBRE';
     buscarcontactos(0,filtro);
});
document.getElementById("filtropais").addEventListener("click", function(){
    filtro='PAIS';
    buscarcontactos(0,filtro);
});
document.getElementById("filtrocompany").addEventListener("click", function(){
    filtro='COMPANIA';
    buscarcontactos(0,filtro);
});
document.getElementById("filtrocargo").addEventListener("click", function(){
    filtro='CARGO';
    buscarcontactos(0,filtro);
});
document.getElementById("filtrointeres").addEventListener("click", function(){
    filtro='INTERES';
    buscarcontactos(0,filtro);
});

///BUSCAR CONTACTOS
function buscarcontactos(x){
    if(x==0){
    fetch("http://localhost:5500/view/contact-list?amount="+ cantidad+ "&filtro=" + filtro )
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        listacontactos.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const cargo = contact.CARGO;
            const compania= contact.COMPANIA;
            const foto=contact.FOTO;
            const interes=contact.INTERES;
            const mail=contact.MAIL;
            const nombre=contact.NOMBRE;
            const pais=contact.PAIS;
            const region=contact.REGION;
            const apellido=contact.APELLIDO;
            const id=contact.ID;
    
            const contacto= `
            <div class="colu-1 ">
                    <input type="checkbox" onchange="handleChange(event)" id="${id}" class="checkbox">
                </div>
                <div class="col-12 colu-03 fotodiv ">
                    <img src="./img/default-user.png" class="foto" alt="Contacto sin foto">
                </div>  
                <div class="col-12 colu-17">
                    <p> ${nombre}  ${apellido}</p>
                    <p class="subtexto"> ${mail} </p>    
                </div>
                <div class=" colu-2">
                    <p> ${pais} </p>
                    <p  class="subtexto"> ${region} </p>
                </div>
                <div class="colu-2">
                    <p> ${compania} </p>
                </div>
                <div class="colu-2">
                    <p> ${cargo} </p>
                </div>
                <div class="colu-2 row">
                    <p>${interes}%<hr class=${interes}%></p>
                </div>
                <div class="colu-1 iconos row">
                    <p><button class="puntos"><i class="fas fa-ellipsis-h puntos"></i></button></p>
                    <p> <button class='botoniconos' onclick="borrarcontacto(event)" id=${id}"><i class='fas fa-trash' id=${id}></i></button></p>
                    <p><button class='botoniconos' id=${id} onclick="editarcontacto(event)"><i class='fas fa-pencil-alt' id=${id}></i></button></p>
                </div>
            `;
            
            const listItem = document.createElement('div');
            // listItem.onmouseover=iconoshover;
            // listItem.onmouseout=puntoshover;
            listItem.classList.add("row", "filagrilla");
            listItem.setAttribute("id", id);
            listItem.innerHTML=contacto;
            listacontactos.appendChild(listItem);     
    
            });
        }); 
    }

    else{
        fetch('http://localhost:5500/search/contact-list?amount='+ cantidad+ "&filtro=" + filtro+ "&palabra=" + palabra )
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        listacontactos.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const cargo = contact.CARGO;
            const compania= contact.COMPANIA;
            const foto=contact.FOTO;
            const interes=contact.INTERES;
            const mail=contact.MAIL;
            const nombre=contact.NOMBRE;
            const pais=contact.PAIS;
            const region=contact.REGION;
            const apellido=contact.APELLIDO;
            const id=contact.ID;
    
            const contacto= `
            <div class="colu-1 ">
                    <input type="checkbox" onchange="handleChange(event)" id="${id}" class="checkbox">
                </div>
                <div class="col-12 colu-03 fotodiv ">
                    <img src="./img/default-user.png" class="foto" alt="Contacto sin foto">
                </div>  
                <div class="col-12 colu-17">
                    <p> ${nombre}  ${apellido}</p>
                    <p class="subtexto"> ${mail} </p>    
                </div>
                <div class=" colu-2">
                    <p> ${pais} </p>
                    <p  class="subtexto"> ${region} </p>
                </div>
                <div class="colu-2">
                    <p> ${compania} </p>
                </div>
                <div class="colu-2">
                    <p> ${cargo} </p>
                </div>
                <div class="colu-2 row">
                    <p>${interes}%<hr class=${interes}%></p>
                </div>
                <div class="colu-1 iconos row">
                    <p><button class="puntos"><i class="fas fa-ellipsis-h puntos"></i></button></p>
                    <p> <button class='botoniconos' onclick="borrarcontacto(event)" id=${id}"><i class='fas fa-trash' id=${id}></i></button></p>
                    <p><button class='botoniconos' onclick="editarcontacto(event)" id=${id}><i class='fas fa-pencil-alt' id=${id}></i></button></p>
                </div>
            `;
            
            const listItem = document.createElement('div');
            // listItem.onmouseover=iconoshover;
            // listItem.onmouseout=puntoshover;
            listItem.classList.add("row", "filagrilla");
            listItem.setAttribute("id", id);
            listItem.innerHTML=contacto;
            listacontactos.appendChild(listItem);     
    
            });
        });
    }
}
    
///TOTAL DE FILAS EN BASE
fetch("http://localhost:5500/view/totalrows")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        const results=data;
        results.forEach( dato => {
            filastot.innerHTML=dato.FILAS;
        })
    })

///CHECKBOX DE CADA FILA
function handleChange(event) {
    var id = event.target.id;
    var box=event.target;
    var checkboxes = document.querySelectorAll('input[class="checkbox"]:checked');

    if(box.checked == true){
        document.getElementById("cantidadseleccionados").innerHTML=checkboxes.length + ' seleccionados';
        document.getElementsByClassName("acciones")[0].style.visibility="visible";
        document.getElementById(id).style.backgroundColor="#E6F2FE";
        borrar(id);
    }else{

        var x=document.querySelectorAll(".checkbox");
        for (i = 0; i < x.length; i++) {
            if(x[i].checked == true){
                document.getElementById("cantidadseleccionados").innerHTML=checkboxes.length + ' seleccionados';        
                document.getElementById(id).style.removeProperty('background-color');   
                borrar(id);  
                break
            }
            else{
                document.getElementsByClassName("acciones")[0].style.visibility="hidden";
                document.getElementById(id).style.removeProperty('background-color');   
                borrar(id);     
            }
        }
   } 
}

///CHEQUEAR TODOS LOS BOXES EN PANTALLA
function checkAll(bx) {
    var cbs = document.querySelectorAll(".checkbox");
    var cbs = document.querySelectorAll(".checkbox");
    for(var i=0; i < cbs.length; i++) {
        cbs[i].click();
        cbs[i].checked=bx.checked;
    }
}

///AGREGAR AL STRING ERASE LOS CHECK BOXES SELECCIONADOS
var erase = JSON.parse(localStorage.getItem("erase")) || [];

function borrar(id) {
        /*var id = event.target.id,
        item = event.target,*/
        index = erase.indexOf(id);
        if (index == -1) {
            erase.push(id);
          // item ya es favorito
          } 
        else {
            erase.splice(index, 1);
          }

        localStorage.setItem('erase', JSON.stringify(erase));
    };
///////CONSTRUIR STRING A BORRAR


//ELIMINAR CONTACTOS
function borrarcontacto2(){
    document.getElementsByClassName("modaleliminar2")[0].style.display="block";

    document.getElementById("cancel2").addEventListener("click", function() {
        document.getElementsByClassName("modaleliminar2")[0].style.display="none";
    })

    document.getElementById("eliminar2").addEventListener("click", function() {
        var erasestring = "";
        if(erase.length == 0){
        }
        else{
            erase.forEach((id,index)=>{
                if(index>0){
                    erasestring+= "," + id;
                }
                else{
                    erasestring+= id;
                }
            })
        };
        console.log(erasestring);

        fetch('http://localhost:5500/bulkdelete?id='+ erasestring, {method: 'DELETE'})
            .then((response) =>{
                if (response.status === 200) {
                    localStorage.removeItem('erase');
                    console.log(response);
                    alert("Contacto borado");
                    buscarcontactos(0);
                } else {
                    console.log(response);
                }
            })
    })
};

