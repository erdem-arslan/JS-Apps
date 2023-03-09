const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");



function calculate(str) {
    const tokens = str.split(/(\+|\-|\*|\/)/);
    let result = Number(tokens[0].replace(",", "."));
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const number = Number(tokens[i + 1].replace(",", "."));
      if (operator === "+") {
        result += number;
      } else if (operator === "-") {
        result -= number;
      } else if (operator === "*") {
        result *= number;
      } else if (operator === "/") {
        result /= number;
      }
    }
    return result;
  }


buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
          } else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
          } else if (display.innerText != "" && item.id == "equal") {
            display.innerText = calculate(display.innerText).toString().replace(".", ",");
          } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 500);
          } else if (display.innerText == "" && item.id == "0") {
            display.innerText = "0,";
          }
          else if(display.innerText == "" && item.id== "*"){
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 500);
          }
          else if(display.innerText == "" && item.id== "/"){
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 500);
          }
          else if(display.innerText != "" && item.id== "*"){
            if (display.innerText.includes("*")) {
                return;
              }
              display.innerText += item.id;
          }
          else if(display.innerText != "" && item.id== "/"){
            if (display.innerText.includes("/")) {
                return;
              }
              display.innerText += item.id;
          }      
          else {
            display.innerText += item.id;
          }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};