const selectorciudad3=document.querySelector('#ciudad3');
const selectorciudad2=document.querySelector('#citycompany2');

    fetch("http://localhost:5500/search/city")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
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

    fetch("http://localhost:5500/search/city")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
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

  
