let hide = document.querySelector("#hide")
let password = document.querySelector("#password");

hide.addEventListener("click", hidden)

function hidden() {
    if (password.type === "password") {
        password.type = "text"
        hide.textContent = "Gizle"
    } else {
        password.type = "password"
        hide.textContent = "Göster"
    }
}
password.addEventListener("input", function () {
    if (password.value===""){
        hide.style.display="none";
    }    
    else{
        hide.style.display="inline-block"
    }
})