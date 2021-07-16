const form = document.getElementById("form")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let nome = document.getElementById ("nome").value;
    let email = document.getElementById ("email").value;
    let data = {
        nome, 
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData);
    
    let content = document.getElementById("content");

    let enviando = "<center><p>Enviando...</p></center>";
    content.innerHTML = enviando;

    setTimeout (() => {
        let enviado = "<center><p>Email cadastrado com sucesso.</p></center>";
        content.innerHTML = enviado;
    },1000)

})