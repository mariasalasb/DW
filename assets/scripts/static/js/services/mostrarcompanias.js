document.getElementById("mostrarcompanias").addEventListener("click", function (){
    document.querySelectorAll('#footer, #grilla, #buscar, #usuarios, #regiones').forEach((el) =>{ el.style.display = " none";} );
    document.getElementById("companias").style.display="block";
    buscarcompanias()
});

const listacompanias=document.querySelector('.listadecompanias');

function borrarcompania(event){
    var id = event.target.id;
    document.getElementsByClassName("modaleliminar4")[0].style.display="block";

    document.getElementById("cancel4").addEventListener("click", function() {
    document.getElementsByClassName("modaleliminar4")[0].style.display="none";
    })

    document.getElementById("eliminar4").addEventListener("click", function() {
        fetch('http://localhost:5500/delete/company?id='+id, {
            method: 'DELETE'})
        .then((response) =>{
            if (response.status === 200) {
                alert("Compañía borrada");
                document.getElementsByClassName("modaleliminar4")[0].style.display="none";
                buscarcompanias();
            } else {
                console.log('error.');
            }
        })
    })
};

function cerrarnuevacompania2(){
    document.getElementsByClassName("modalcompania2")[0].style.display="none";
    document.getElementById("newcompany2").reset();
};

function cerrarnuevacompania(){
    document.getElementsByClassName("modalcompania")[0].style.display="none";
    document.getElementById("newcompany").reset();
};

function crearnuevacompania(){
    document.getElementsByClassName("modalcompania")[0].style.display="block";
    document.getElementById("guardarcompany").style.marginLeft="400px";


document.getElementById("guardarcompany").addEventListener("click",function(){
    
            const data = { 
            NOMBRE:document.getElementById("namecompany").value,
            DIRECCION:document.getElementById("addresscompany").value,
            EMAIL:document.getElementById("mailcompany").value,
            TELEFONO:document.getElementById("telcompany").value,
            CIUDAD:document.getElementById("citycompany").value,
        };
        
            fetch('http://localhost:5500/add/company', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
            .then((response) =>{
                if (response.status === 200) {
                    console.log('Compañia creada con éxito');
                    cerrarnuevacompania();
                    buscarcompanias();
                  } else {
                    alert('Error, compañía no creado, valide los datos.');
                  }
            })
    })
};

function editarcompania(event){
    document.getElementsByClassName("modalcompania2")[0].style.display="block";
    document.getElementById("deletecompany2").style.display="block";
    document.getElementById("guardarcompany2").style.marginLeft="400px";
    document.getElementById("guardarcompany2").style.marginTop="0px";

    var id = event.target.id;
  
    document.getElementById("deletecompany2").addEventListener("click", function() {
  
      document.getElementsByClassName("modaleliminar4")[0].style.display="block";
  
      document.getElementById("cancel4").addEventListener("click", function() {
          document.getElementsByClassName("modaleliminar4")[0].style.display="none";
      })
  
      document.getElementById("eliminar4").addEventListener("click", function() {
        fetch('http://localhost:5500/delete/company?id='+id, {
            method: 'DELETE'})
        .then((response) =>{
            if (response.status === 200) {
                alert("Compañía borrada");
                document.getElementsByClassName("modaleliminar4")[0].style.display="none";
                document.getElementsByClassName("modalcompania2")[0].style.display="none";
                buscarcompanias();
            } else {
                console.log('error.');
            }
        })
    })
  });
  
    document.getElementById("guardarcompany2").addEventListener("click", function(){
            const data = { 
                NOMBRE:document.getElementById("namecompany2").value,
                DIRECCION:document.getElementById("addresscompany2").value,
                EMAIL:document.getElementById("mailcompany2").value,
                TELEFONO:document.getElementById("telcompany2").value,
                CIUDAD:document.getElementById("citycompany2").value,
        };
        
            fetch('http://localhost:5500/update/company?id='+ id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) =>{
                if (response.status === 200) {
                    console.log('Compañía actualizada con éxito');
                    cerrarnuevacompania2()
                    buscarcompanias();
                } else {
                    console.log('error.');
                }
            })
      });
  
  
    fetch("http://localhost:5500/search/company?id="+ id)
      .then( tipoDeDato => tipoDeDato.json())
      .then(data => {
          console.log(data);
          const results=data;
          results.forEach( contact => {
            document.getElementById("namecompany2").value=contact.NOMBRE;
            document.getElementById("addresscompany2").value=contact.DIRECCION;
            document.getElementById("mailcompany2").value=contact.EMAIL;
            document.getElementById("telcompany2").value=contact.TELEFONO;
            document.getElementById("citycompany2").value=contact.CIUDAD;
              });
          }); 
  
  };

function buscarcompanias(){
    fetch("http://localhost:5500/view/company-list")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        console.log(data);
        listacompanias.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const direccion = contact.DIRECCION;
            const mail=contact.EMAIL;
            const nombre=contact.NOMBRE;
            const telefono=contact.TELEFONO;
            const ciudad=contact.CIUDAD;
            const id=contact.ID;
    
            const contacto= `
            <div class="colu-1 ">
                    <input type="checkbox"  id="${id}" class="checkbox">
                </div>
                <div class="col-12 colu-2">
                    <p> ${nombre}  </p>
                </div>
                <div class=" colu-2">
                    <p> ${direccion} </p>
                </div>
                <div class="colu-2">
                    <p> ${mail} </p>
                </div>
                <div class="colu-2">
                    <p> ${telefono} </p>
                </div>
                <div class="colu-2">
                    <p> ${ciudad} </p>
                </div>
                <div class="colu-1 iconos row">
                    <p><button class="puntos"><i class="fas fa-ellipsis-h puntos"></i></button></p>
                    <p> <button class='botoniconos' onclick="borrarcompania(event)" id=${id}><i class='fas fa-trash' id=${id}></i></button></p>
                    <p><button class='botoniconos' id=${id} onclick="editarcompania(event)"><i class='fas fa-pencil-alt' id=${id}></i></button></p>
                </div>
            `;
            
            const listItem = document.createElement('div');
            listItem.classList.add("row", "filagrilla");
            listItem.setAttribute("id", id);
            listItem.innerHTML=contacto;
            listacompanias.appendChild(listItem);     
    
            });
    }); 
};