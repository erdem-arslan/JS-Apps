const button = document.getElementById('btn');
const colorText = document.querySelector('.color')
const copy=document.querySelector(".copy")

const hex = [
   '0',
   '1',
   '2',
   '3',
   '4',
   '5',
   '6',
   '7',
   '8',
   '9',
   'A',
   'B',
   'C',
   'D',
   'E', 
   'F'
]

button.addEventListener('click', () =>{
   const hexColor = generateHexColor();
   document.body.style.transition = 'background-color 0.5s ease-in-out'
   document.body.style.backgroundColor = hexColor;
   colorText.textContent = hexColor;
})

const generateHexColor = () =>{
   let hexcolor = '#';
   for(let i = 0; i<6; i++){
      hexcolor += hex[getRandomNumber()] 
   }
   return hexcolor
}

const getRandomNumber = () =>{
   return Math.floor(Math.random()*hex.length);
}
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(colorText.textContent)
    copy.classList.add("tada");
    setTimeout(() => {
       copy.classList.remove("tada") 
    }, 1000);
})