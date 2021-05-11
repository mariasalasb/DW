window.onload=buscarrpc();

document.getElementById("mostrarregiones").addEventListener("click", function (){
    document.querySelectorAll('#footer, #grilla, #buscar, #usuarios, #companias').forEach((el) =>{ el.style.display = " none";} );
    document.getElementById("regiones").style.display="block";
});

function cerrarciudad(){
    document.getElementsByClassName("crudciudad")[0].style.display="none";
    document.getElementById("inputrpc2").value="";
    document.getElementById("inputrpc").value="";

};
function cerrarpais(){
    document.getElementsByClassName("crudpais")[0].style.display="none";
    document.getElementById("inputpais2").value="";
    document.getElementById("inputpais").value="";

};
function cerrarregion(){
    document.getElementsByClassName("crudreg")[0].style.display="none";
    document.getElementById("inputreg").value="";
    document.getElementById("inputreg2").value="";

};
function cerrarregion2(){
    document.getElementsByClassName("crudreg2")[0].style.display="none";
    document.getElementById("inputreg3").value="";
};

function addcitywithcountryid(event){
    var id=event.target.getAttribute('name');
    console.log(id);
        const data = { 
        NOMBRE_CIUDAD:document.getElementById("inputrpc2").value,
        ID_PAIS:id,
        };
   
        fetch('http://localhost:5500/add/citywithcountryid', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) =>{
            if (response.status === 200) {
                cerrarciudad();
                console.log('Ciudad creada con éxito');
                buscarrpc();
            } else {
                console.log('error.');
            }
        })
};

function deletecity(event){
    var id = event.target.getAttribute('name');

             fetch('http://localhost:5500/delete/city?id='+id, {
                 method: 'DELETE'})
             .then((response) =>{
                 if (response.status === 200) {
                     alert("Ciudad borrada");
                     cerrarciudad();
                     buscarrpc();
                 } else {
                     console.log('error.');
                 }
             })
};

function updatecity(event){
    var id = event.target.getAttribute('name');

        const data = { 
        NOMBRE_CIUDAD:document.getElementById("inputrpc").value,
        };
   
        fetch('http://localhost:5500/update/city?id='+ id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) =>{
            if (response.status === 200) {
                console.log('Ciudad actualizada con éxito');
                cerrarciudad();
                buscarrpc();
            } else {
                console.log('error.');
            }
        })
};

function addcity(event){
    var id = event.target.getAttribute('name');

        const data = { 
        NOMBRE_CIUDAD:document.getElementById("inputrpc2").value,
        ID_CIUDAD:id,
        };
   
        fetch('http://localhost:5500/add/city', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) =>{
            if (response.status === 200) {
                cerrarciudad();
                console.log('Ciudad creada con éxito');
                buscarrpc();
            } else {
                console.log('error.');
            }
        })
};

function modalciudad(event){
    document.getElementsByClassName("crudciudad")[0].style.display="block";
    var nome=event.target.getAttribute('name');
    var id = event.target.id;
    console.log(nome);

     if (nome=="null"){

        document.getElementsByClassName("regh1")[0].style.color="#A0A0A0";

        const botonaborrarciudad= `
        <button id="eliminar5" onclick="deletecity(event)" style="color:white;background:#A0A0A0;border:#A0A0A0;disabled">Eliminar</button>`;
        
        document.querySelector('.eliminar5').innerHTML=botonaborrarciudad;
        /*const ciudadess=document.getElementById("reg");*/

        const botonactciudad= `
        <button id="cancel5" onclick="updatecity(event)" style="color:white;background:#A0A0A0;border:#A0A0A0;disabled">Actualizar</button>`;
        document.querySelector('.cancel5').innerHTML=botonactciudad;

        const botonagregarciudadconpais= `
        <button id="cancel6" name=${id} onclick="addcitywithcountryid(event)">Guardar</button>`;
        document.querySelector('.cancel6').innerHTML=botonagregarciudadconpais;
        /*const ciudadess=document.getElementById("reg");*/

    }

    else{

        document.getElementsByClassName("regh1")[0].style.color="black";
        
        const botonaborrarciudad= `
        <button id="eliminar5" name=${id} onclick="deletecity(event)" >Eliminar</button>`;
        document.getElementsByClassName("eliminar5")[0].innerHTML= botonaborrarciudad;
        /*const ciudadess=document.getElementById("reg");*/

        const botonactciudad= `
        <button id="cancel5" name=${id} onclick="updatecity(event)" >Actualizar</button>`;
        document.getElementsByClassName("cancel5")[0].innerHTML= botonactciudad;

        const agregarciudad= `
        <button id="cancel6" name=${id} onclick="addcity(event)">Guardar</button>`;
        document.getElementsByClassName("cancel6")[0].innerHTML= agregarciudad;
        
     fetch("http://localhost:5500/view/cities?ciudad_id="+ id)
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        const results=data;
        results.forEach( contact => {
            document.getElementById("inputrpc").value=contact.NOMBRE_CIUDAD;
            document.getElementById("paisciudad").innerHTML=" a " + contact.NOMBRE_PAIS ;
          })
      })
    } 
    
  };

function countrywithregion(event){
    var id=event.target.getAttribute('name');
        const data = { 
        NOMBRE_PAIS:document.getElementById("inputpais2").value,
        ID_REGION:id,
        };
   
        fetch('http://localhost:5500/add/countrywithregion', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) =>{
            if (response.status === 200) {
                cerrarpais();
                console.log('País creado con éxito');
                buscarrpc();
            } else {
                console.log('error.');
            }
   });
};

function deletecountry(event){
    var id=event.target.getAttribute('name');

        fetch('http://localhost:5500/delete/country?id='+id, {
            method: 'DELETE'})
        .then((response) =>{
            if (response.status === 200) {
                alert("País borrado");
                cerrarpais();
                buscarrpc();
            } else {
                console.log('error.');
            }
        })
};

function updatepais(event){
    var id=event.target.getAttribute('name');

        const data = { 
        NOMBRE_PAIS:document.getElementById("inputpais").value,
        };
   
        fetch('http://localhost:5500/update/pais?id='+ id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) =>{
            if (response.status === 200) {
                console.log('País actualizado con éxito');
                cerrarpais();
                buscarrpc();
            } else {
                console.log('error.');
            }
    });
};

function addcountry(event){
    var id=event.target.getAttribute('name');

        const data = { 
        NOMBRE_PAIS:document.getElementById("inputpais2").value,
        ID_PAIS:id,
        };
   
        fetch('http://localhost:5500/add/country', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) =>{
            if (response.status === 200) {
                cerrarpais();
                console.log('País creado con éxito');
                buscarrpc();
            } else {
                console.log('error.');
            }
   });
};

function modalpais(event){
    document.getElementsByClassName("crudpais")[0].style.display="block";
    var nome=event.target.getAttribute('name');
    var id = event.target.id;
    console.log(nome);

     if (nome=="null"){
        document.getElementsByClassName("regh1")[0].style.color="#A0A0A0";

        const botonaborrarciudad= `
        <button id="eliminar6" name=${id} onclick="deletecountry(event)" style="color:white;background:#A0A0A0;border:#A0A0A0;disabled">Eliminar</button>`;
        
        document.querySelector('.eliminar6').innerHTML=botonaborrarciudad;
        /*const ciudadess=document.getElementById("reg");*/

        const botonactpais= `
        <button id="cancel7" name=${id} onclick="updatepais(event)" style="color:white;background:#A0A0A0;border:#A0A0A0;disabled">Actualizar</button>`;
        document.querySelector('.cancel7').innerHTML=botonactpais;

        const countrywithregion= `
        <button id="cancel8" name=${id} onclick="countrywithregion(event)">Guardar</button>`;
        document.querySelector('.cancel8').innerHTML=countrywithregion;
       
        
    }

    else{

        document.getElementsByClassName("regh1")[0].style.color="black";
        
        const botonaborrarciudad= `
        <button id="eliminar6" name=${id} onclick="deletecountry(event)" style="border:red;color:white;background:red">Eliminar</button>`;
        
        document.querySelector('.eliminar6').innerHTML=botonaborrarciudad;

        const botonactpais= `
        <button id="cancel7" name=${id} onclick="updatepais(event)" style="border:#0683F9;color:#0683F9;background:white">Actualizar</button>`;
        document.querySelector('.cancel7').innerHTML=botonactpais;

        const countrywithregion= `
        <button id="cancel8" name=${id} onclick="addcountry(event)">Guardar</button>`;
        document.querySelector('.cancel8').innerHTML=countrywithregion;

        fetch("http://localhost:5500/view/countries?pais_id="+ id)
        .then( tipoDeDato => tipoDeDato.json())
        .then(data => {
            const results=data;
            results.forEach( contact => {
              document.getElementById("inputpais").value=contact.NOMBRE_PAIS;
              document.getElementById("regpais").innerHTML="a " +contact.NOMBRE_REGION;
            })
        })
    } 
  };

function deleteregion(event){
    var id=event.target.getAttribute('name');

        fetch('http://localhost:5500/delete/region?id='+id, {
            method: 'DELETE'})
        .then((response) =>{
            if (response.status === 200) {
                alert("Región borrada");
                cerrarregion();
                buscarrpc();
            } else {
                console.log('error.');
            }
    });
};

function updateregion(event){
    var id=event.target.getAttribute('name');

        const data = { 
        NOMBRE_REGION:document.getElementById("inputreg").value,
        };
    
        fetch('http://localhost:5500/update/region?id='+ id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) =>{
            if (response.status === 200) {
                console.log('Región actualizada con éxito');
                cerrarregion();
                buscarrpc();
            } else {
                console.log('error.');
            }
    });
};

function addregion(event){
    var id=event.target.getAttribute('name');

        const data = { 
        NOMBRE_REGION:document.getElementById("inputreg2").value,
        ID_REGION:id,
        };
    
        fetch('http://localhost:5500/add/region', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) =>{
            if (response.status === 200) {
                cerrarregion();
                console.log('Región creada con éxito');
                buscarrpc();
            } else {
                console.log('error.');
            }
    });
};
function modalregion(event){
    document.getElementsByClassName("crudreg")[0].style.display="block";
    var id = event.target.id;

    const botonaborrarreg= `
    <button id="eliminar7" name=${id} onclick="deleteregion(event)" style="border:red;color:white;background:red">Eliminar</button>`;
        
    document.querySelector('.eliminar7').innerHTML=botonaborrarreg;

    const botonactreg= `
    <button id="cancel9" name=${id} onclick="updateregion(event)" style="border:#0683F9;color:#0683F9;background:white">Actualizar</button>`;
    document.querySelector('.cancel9').innerHTML=botonactreg;

    const addreg= `
    <button id="cancel10" name=${id} onclick="addregion(event)">Guardar</button>`;
    document.querySelector('.cancel10').innerHTML=addreg;

    fetch("http://localhost:5500/view/regions?region_id="+ id)
      .then( tipoDeDato => tipoDeDato.json())
      .then(data => {
          const results=data;
          results.forEach( contact => {
            document.getElementById("inputreg").value=contact.NOMBRE_REGION;
            })
        })
  };

  function crearnuevorpc(){
    document.getElementsByClassName("crudreg2")[0].style.display="block";


    document.getElementById("cancel11").addEventListener("click", function(){
        const data = { 
        NOMBRE_REGION:document.getElementById("inputreg3").value,
        };
    
        fetch('http://localhost:5500/add/region', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) =>{
            if (response.status === 200) {
                cerrarregion2();
                buscarrpc();
                console.log('Región creada con éxito');
            } else {
                console.log('error.');
            }
        })
    });
  };

const listaregiones=document.querySelector('.listaregiones');

function buscarrpc(){
    fetch("http://localhost:5500/filter/rcc")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        listaregiones.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const region = contact.NOMBRE_REGION;
            const pais=contact.NOMBRE_PAIS;
            const ciudad=contact.NOMBRE_CIUDAD;  
            const region_id=contact.REGION_ID;
            const pais_id=contact.PAIS_ID;
            const ciudad_id=contact.CIUDAD_ID;

            if(ciudad_id==null && pais_id==null){
            const contacto= `
            <div class="colu-1"></div>
                <div class="col-12 colu-3 " id="reg">
                    <button id="${region_id}" onclick="modalregion(event)">${region}</button>
                </div>
                <div class=" colu-4">
                    <button id="${region_id}" name=${pais} onclick="modalpais(event)">Agrega un país a  ${region}</button>
                </div>
                <div class="colu-4 ">
                    <p></p>
                </div>`;

                const listItem = document.createElement('div');
                listItem.classList.add("row", "filagrilla");
                /*listItem.setAttribute("id", id);*/
                listItem.innerHTML=contacto;
                listaregiones.appendChild(listItem);
                const ciudadess=document.getElementById("reg");
            }
            else if(region_id!=null && pais_id!=null && ciudad_id==null){
                const contacto= `
                <div class="colu-1"></div>
                    <div class="col-12 colu-3 " id="reg">
                        <button id="${region_id}" onclick="modalregion(event)">${region}</button>
                    </div>
                    <div class=" colu-4">
                        <button id="${pais_id}" name=${pais}  onclick="modalpais(event)">${pais}</button>
                    </div>
                    <div class="colu-4 ">
                        <button id="${pais_id}" name=${ciudad} onclick="modalciudad(event)">Agrega una ciudad a ${pais}</button>
                    </div>`;
                    const listItem = document.createElement('div');
                    listItem.classList.add("row", "filagrilla");
                    /*listItem.setAttribute("id", id);*/
                    listItem.innerHTML=contacto;
                    listaregiones.appendChild(listItem);
                    const ciudadess=document.getElementById("reg");
            }
            else if(region_id==null && pais_id==null){
                
            }
            else{
                const contacto= `
            <div class="colu-1"></div>
                <div class="col-12 colu-3 " id="reg">
                    <button id="${region_id}" onclick="modalregion(event)">${region}</button>
                </div>
                <div class=" colu-4">
                    <button id="${pais_id}" name=${pais}  onclick="modalpais(event)">${pais}</button>
                </div>
                <div class="colu-4 ">
                    <button id="${ciudad_id}" name=${ciudad} onclick="modalciudad(event)">${ciudad}</button>
                </div>`;
                const listItem = document.createElement('div');
                listItem.classList.add("row", "filagrilla");
                /*listItem.setAttribute("id", id);*/
                listItem.innerHTML=contacto;
                listaregiones.appendChild(listItem);
                const ciudadess=document.getElementById("reg");
            }
        });
    });

};

