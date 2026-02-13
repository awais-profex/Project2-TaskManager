let input = document.querySelector("input");
let delall = document.querySelector(".del-all");
let add = document.querySelector(".add-btn");
let list = document.querySelector("ul");
let defaultMsg = document.querySelector(".default");

function toggleDefault() {
    let tasks = list.querySelectorAll("li:not(.default)"); 
    if(tasks.length === 0) {
        defaultMsg.style.display = "list-item"; 
    } else {
        defaultMsg.style.display = "none"; 
    }
}

add.addEventListener('click',function(){
    
    let task = input.value;
    
    if(task.trim() !== ""){

        let newli = document.createElement("li");
        newli.textContent = task;
        list.appendChild(newli);
        toggleDefault();

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.classList.add("check");
        newli.appendChild(checkbox);

        checkbox.addEventListener("click", function(){
            if(checkbox.checked){
                newli.style.opacity = "0.6";
                newli.style.backgroundColor = "#63a060";
            } else {
                newli.style.opacity = "1";
                newli.style.backgroundColor = "aliceblue";
            }
        });

        let deleteBtn = document.createElement("button");        
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("del-btn");
        
        deleteBtn.addEventListener('click', function(){
            newli.remove();
            toggleDefault();
        });

        newli.appendChild(deleteBtn);
        input.value = "";
        input.focus();


    }
})

delall.addEventListener('click', function(){
    let tasks = list.querySelectorAll("li:not(.default)");
    tasks.forEach(task => task.remove());
    toggleDefault();
});

input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        add.click();
    }
});