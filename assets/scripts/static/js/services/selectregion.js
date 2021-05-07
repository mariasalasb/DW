///SELECTOR CIUDADES

document.getElementById("pais").onchange = function() {
    idpa = this.value;

    const selectorci=document.querySelector('#ciudad');
    
    fetch("http://localhost:5500/search/citiesbycountry?NOMBRE_PAIS="+idpa)
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        selectorci.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE_CIUDAD;
            const id=contact.ID;

            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.setAttribute("id", id);
            listItem.innerHTML=contacto;
            selectorci.appendChild(listItem);     
            });
    }); 
};

document.getElementById("pais2").onchange = function() {
    idpa = this.value;

    const selectorci2=document.querySelector('#ciudad2');

    fetch("http://localhost:5500/search/citiesbycountry?NOMBRE_PAIS="+idpa)
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        selectorci2.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE_CIUDAD;
            const id=contact.ID;

            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.setAttribute("id", id);
            listItem.innerHTML=contacto;
            selectorci2.appendChild(listItem);     
            });
    }); 
};

///SELECTOR PAISES

document.getElementById("region").onchange = function() {
    idreg = this.value;

    const selectorpa=document.querySelector('#pais');
    const selectorpa2=document.querySelector('#pais2');

    fetch("http://localhost:5500/search/pais?NOMBRE_REGION="+idreg)
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        selectorpa.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE_PAIS;
            const id=contact.ID;

            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.setAttribute("id", id);
            listItem.innerHTML=contacto;
            selectorpa.appendChild(listItem);     
            });
    }); 
};

document.getElementById("region2").onchange = function() {
    idreg = this.value;

    const selectorpa=document.querySelector('#pais');
    const selectorpa2=document.querySelector('#pais2');

    fetch("http://localhost:5500/search/pais?NOMBRE_REGION="+idreg)
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        selectorpa2.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE_PAIS;
            const id=contact.ID;

            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.setAttribute("id", id);
            listItem.innerHTML=contacto;
            selectorpa2.appendChild(listItem);     
            });
    }); 
};

///SELECTOR REGIONES

const selectorreg=document.querySelector('#region');
const selectorreg2=document.querySelector('#region2');


    fetch("http://localhost:5500/search/region")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        selectorreg.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE_REGION;
            const id=contact.ID;
            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.setAttribute("id", id);
            listItem.innerHTML=contacto;
            selectorreg.appendChild(listItem);     
            });
    }); 


    fetch("http://localhost:5500/search/region")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        selectorreg2.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE_REGION;
            const id=contact.ID;
    
            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.setAttribute("id", id);
            listItem.innerHTML=contacto;
            selectorreg2.appendChild(listItem);   
            });
    }); 

