window.onload=buscarrpc();

document.getElementById("mostrarregiones").addEventListener("click", function (){
    document.querySelectorAll('#footer, #grilla, #buscar, #usuarios, #companias').forEach((el) =>{ el.style.display = " none";} );
    document.getElementById("regiones").style.display="block";
});

function cerrarciudad(){
    document.getElementsByClassName("crudciudad")[0].style.display="none";
    document.getElementById("inputrpc2").value="";
};
function cerrarpais(){
    document.getElementsByClassName("crudpais")[0].style.display="none";
    document.getElementById("inputpais2").value="";
};
function cerrarregion(){
    document.getElementsByClassName("crudreg")[0].style.display="none";
    document.getElementById("inputreg").value="";
};
function cerrarregion2(){
    document.getElementsByClassName("crudreg2")[0].style.display="none";
    document.getElementById("inputreg3").value="";
};

const listaregiones=document.querySelector('.listaregiones');

function modalciudad(event){
    document.getElementsByClassName("crudciudad")[0].style.display="block";
    var id = event.target.id;

    document.getElementById("eliminar5").addEventListener("click", function() {
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
    });
  
    document.getElementById("cancel5").addEventListener("click", function(){
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
    });

    document.getElementById("cancel6").addEventListener("click", function(){
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
});

    fetch("http://localhost:5500/view/cities?ciudad_id="+ id)
      .then( tipoDeDato => tipoDeDato.json())
      .then(data => {
          const results=data;
          results.forEach( contact => {
            document.getElementById("inputrpc").value=contact.NOMBRE_CIUDAD;
            document.getElementById("paisciudad").innerHTML=contact.NOMBRE_PAIS;
            })
        })
  };

function modalpais(event){
    document.getElementsByClassName("crudpais")[0].style.display="block";
    var id = event.target.id;

    document.getElementById("eliminar6").addEventListener("click", function() {
        fetch('http://localhost:5500/delete/country?id='+id, {
            method: 'DELETE'})
        .then((response) =>{
            if (response.status === 200) {
                alert("Pais borrado");
                cerrarpais();
                buscarrpc();
            } else {
                console.log('error.');
            }
        })
    });
  
    document.getElementById("cancel7").addEventListener("click", function(){
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
                    console.log('Pais actualizado con éxito');
                    cerrarpais();
                    buscarrpc();
                } else {
                    console.log('error.');
                }
            })
    });

    document.getElementById("cancel8").addEventListener("click", function(){
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
                console.log('Pais creado con éxito');
                buscarrpc();
            } else {
                console.log('error.');
            }
        })
});

    fetch("http://localhost:5500/view/countries?pais_id="+ id)
      .then( tipoDeDato => tipoDeDato.json())
      .then(data => {
          const results=data;
          results.forEach( contact => {
            document.getElementById("inputpais").value=contact.NOMBRE_PAIS;
            document.getElementById("regpais").innerHTML=contact.NOMBRE_REGION;
            })
        })
  };

function modalregion(event){
    document.getElementsByClassName("crudreg")[0].style.display="block";
    var id = event.target.id;

    document.getElementById("eliminar7").addEventListener("click", function() {
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
        })
    });
  
    document.getElementById("cancel9").addEventListener("click", function(){
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
            })
    });

    document.getElementById("cancel10").addEventListener("click", function(){
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
        })
});

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
            
            const contacto= `
            <div class="colu-1"></div>
                <div class="col-12 colu-3 " id="reg">
                    <button id="${region_id}" onclick="modalregion(event)">${region}</button>
                </div>
                <div class=" colu-4">
                    <button id="${pais_id}" onclick="modalpais(event)">${pais}</button>
                </div>
                <div class="colu-4 ">
                    <button id="${ciudad_id}" onclick="modalciudad(event)">${ciudad}</button>
                </div>
                
            
            `
            ;
            const listItem = document.createElement('div');
            listItem.classList.add("row", "filagrilla");
            /*listItem.setAttribute("id", id);*/
            listItem.innerHTML=contacto;
            listaregiones.appendChild(listItem);

            const ciudadess=document.getElementById("reg");
            
        });
    });

};

