document.getElementById("ingresar").addEventListener("click", 
function(){
    const data = { 
    USER:document.getElementById("usuario").value,
    PASS:document.getElementById("pass").value
};

    fetch('http://localhost:5500/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) =>{
        if (response.status === 200) {
            document.getElementsByClassName("modallogin")[0].style.display="none";
          } else {
            console.log('error.');
          }
    })
})