document.getElementById("mostrarregiones").addEventListener("click", function (){
    document.querySelectorAll('#footer, #grilla, #buscar, #usuarios, #rcompanias').forEach((el) =>{ el.style.display = " none";} );
    document.getElementById("regiones").style.display="block";
});




const listaregiones=document.querySelector('#listaregiones');
/*
const region = contact.NOMBRE_REGION;
const pais=contact.NOMBRE_PAIS;
const ciudad=contact.NOMBRE_CIUDAD;  
const region_id=contact.REGION_ID;
const pais_id=contact.PAIS_ID;
const ciudad_id=contact.CIUDAD_ID; */

const toggler = document.getElementsByClassName("caret");
var i;



window.onload=mostrararbol();
function mostrararbol(){

    fetch("http://localhost:5500/filter/rcc")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        listaregiones.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const region_id=contact.REGION_ID;
            const pais_id=contact.PAIS_ID;
            const ciudad_id=contact.CIUDAD_ID;
            
            const contacto= `
            <ul id="myUL">
                <li><span class="caret"id=${region_id}>Beverages</span>
                    <ul class="nested" id=${region_id}>
                        <li>XX</li>
                        <li>Coffee</li>
                        <li><span class="caret">Tea</span>
                                <ul class="nested"  >
                                    <li>Black Tea</li>
                                    <li>White Tea</li>
                                    <li><button>Green Tea</button></li>
                                    <div id="ciudadess"></div>
                                </ul>
                            </li>  
                    </ul>
                </li>
            </ul>
            
            `
            ;
            
            const listItem = document.createElement('div');
            /*listItem.classList.add("row", "filagrilla");
            listItem.setAttribute("id", id);*/
            listItem.innerHTML=contacto;
            listaregiones.appendChild(listItem);
            
            const listaciudades=document.getElementById("ciudadess");

            fetch("http://localhost:5500/view/cities?pais_id="+pais_id)
            .then( tipoDeDato => tipoDeDato.json())
            .then(data => {
                console.log(data);
                listaciudades.innerHTML="";
                const results=data;
                results.forEach( contact => {
                    const ciudad=contact.NOMBRE_CIUDAD;  
                    const ciudad_id=contact.ID; 
                    
                    const ciudadd= `
                    <button id="${ciudad_id}">"${ciudad}"</button>
                    `;
                    
                    const listItem = document.createElement('LI');
                    listItem.innerHTML=ciudadd;
                    listaciudades.appendChild(listItem);     
                    });
            }); 


            });
            for (i = 0; i < toggler.length; i++) {
                toggler[i].addEventListener("click", function() {
                  this.parentElement.querySelector(".nested").classList.toggle("active");
                  this.classList.toggle("caret-down");
                });
            };

    });
};



        
    


            


