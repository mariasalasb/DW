const selectorcompania=document.querySelector('#company');
const selectorcompania2=document.querySelector('#company2');


    fetch("http://localhost:5500/view/company-list")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        listacompanias.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE;
    
            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.innerHTML=contacto;
            selectorcompania.appendChild(listItem);     
            });
    }); 

    fetch("http://localhost:5500/view/company-list")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        listacompanias.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE;
    
            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.innerHTML=contacto;
            selectorcompania2.appendChild(listItem);   
            });
    }); 
