const selectorciudad3=document.querySelector('#ciudad3');

    fetch("http://localhost:5500/search/city")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        listacompanias.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE_CIUDAD;
    
            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.innerHTML=contacto;
            selectorciudad.appendChild(listItem);     
            });
    }); 

    fetch("http://localhost:5500/search/city")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        listacompanias.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE_CIUDAD;
    
            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.innerHTML=contacto;
            selectorciudad2.appendChild(listItem);   
            });
    }); 

    fetch("http://localhost:5500/search/city")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        listacompanias.innerHTML="";
        const results=data;
        results.forEach( contact => {
            const nombre=contact.NOMBRE_CIUDAD;
    
            const contacto= `
            ${nombre}
            `;
            
            const listItem = document.createElement('option');
            listItem.setAttribute("value", nombre);
            listItem.innerHTML=contacto;
            selectorciudad3.appendChild(listItem);   
            });
    }); 
