const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const hesapla = document.querySelector("#hesapla");
const deger = document.querySelector(".result h3");
const aciklama = document.querySelector(".result h5");
const restart=document.querySelector("#restart");

restart.addEventListener("click", ()=>{
    height.value=""
    weight.value=""
    deger.innerHTML=""
    aciklama.innerHTML=""
    restart.classList.add("flashing")

    setTimeout(() => {
        restart.classList.remove("flashing")
    }, 1000);
})


hesapla.addEventListener("click", () => {

    if (height.value == "") {
        height.classList.add("error")
        setTimeout(() => {
            height.classList.remove("error")
        }, 2000);
    } else if (weight.value == "") {
        weight.classList.add("error")
        setTimeout(() => {
            weight.classList.remove("error")
        }, 2000);
    } else {
        const heightMeters = parseFloat(height.value) / 100;
        let result = 0;
        result += parseFloat(weight.value) / (heightMeters * heightMeters)
        deger.innerHTML = result.toFixed(2);
        if (result < 18) {
            aciklama.innerText = "Zayıf"
            aciklama.style.color = "#c62424"
        } else if (result > 18 && result <= 25) {
            aciklama.innerText = "Normal"
            aciklama.style.color = "green"
        } else if (result > 25) {
            aciklama.innerText = "Kilolu"
            aciklama.style.color = "#c62424"
        }
    }
});