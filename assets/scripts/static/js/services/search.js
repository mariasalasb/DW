document.getElementById("lupa").addEventListener("click", search());

function search(){
    fetch('http://localhost:5500/search/contact-list?amount='+ cantidad+ "&filtro=" + filtro+ "&palabra=" + palabra )
    .then((response) =>{
        if (response.status === 200) {
            document.getElementsByClassName("modallogin")[0].style.display="none";
          } else {
            console.log('error.');
          }
    })
}