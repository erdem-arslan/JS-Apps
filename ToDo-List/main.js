let added = document.querySelector("#saved");
let save = document.querySelector("#save");
let todoFrame = document.querySelector("#todoListFrame")
let todoCount = 0


function searcBar() {
    const searchInput = document.querySelector("#search")

    searchInput.addEventListener("input", function () {
        let data = this.value.toLowerCase();
        let oneTodo = document.querySelectorAll("#oneTodo");
    
        for (let i = 0; i < oneTodo.length; i++) {
            let todoText = oneTodo[i].innerText.toLowerCase();
    
            if (todoText.includes(data) || data === "") {
                oneTodo[i].style.display = "";
            } else {
                oneTodo[i].style.display = "none";
            }
        }
    });
}

searcBar()
save.addEventListener("click", saved);

function saved() {
    event.preventDefault();
    let todoInput = document.querySelector("#todo")
    let todo = todoInput.value.trim();
    if (todo.length > 0) {
        todoCount++

        let todoRow = document.createElement("tr")
        let todoNumber = document.createElement("td")
        let todoText = document.createElement("td")
        let status = document.createElement("td")
        let del = document.createElement("button")
        let complete = document.createElement("button")

        todoNumber.innerText = todoCount
        todoText.innerText = todo
        todoRow.appendChild(todoNumber)
        todoRow.appendChild(todoText)
        todoRow.appendChild(status)
        todoRow.appendChild(del)
        todoRow.appendChild(complete)
        todoFrame.appendChild(todoRow)
        todoRow.id = "oneTodo"
        added.innerHTML = "Başarı ile eklendi"
        added.style.color = "green"

        // bu fonksiyondan dolayı ek puan istiyorum js içinde scss yaptım :D
        function styler(name) {
            name.classList.add("btn")
            name.style.color = "white"
            name.style.padding = "10px"
            name.style.margin = "3px"
            name.type = "submit"
        }

        styler(del)
        styler(complete)

        del.style.backgroundColor = "#dc3545"
        del.innerHTML = "Delete"
        complete.style.backgroundColor = "#198754"
        complete.innerHTML = "Finished"

        del.id = "del"
        complete.id = "complete"

        status.innerHTML = "Tamamlanmadı"
        status.style.color = "red"

        function deleteRow(row) {
            const rowIndex = row.rowIndex;
            todoFrame.deleteRow(rowIndex);
            const rows = todoFrame.rows;
            for (let i = rowIndex; i < rows.length; i--) {
                const rowNumber = rows[i].cells[0];
                rowNumber.textContent = i;
            }

            todoCount--;
        }

        del.addEventListener("click", function (e) {
            const row = e.target.parentNode.parentNode;
            deleteRow(row);
        });



        complete.addEventListener("click", function () {
            if (status.style.color == "red") {
                status.innerHTML = "Tamamlandı"
                status.style.color = "green"
                todoText.style.textDecoration = "line-through"
            } else {
                status.innerHTML = "Tamamlanmadı"
                status.style.color = "red"
                todoText.style.textDecoration = "none"
            }

        });

        setTimeout(() => {
            added.innerHTML = "ToDo Ekle"
            added.style.color = "black"
            let todoInput = document.querySelector("#todo").value = ""
        }, 500);
    }
}