let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
            saveData();
        }
        saveData();
        
        
    }
}
function saveData(){
    localStorage.setItem("data",text.innerHTML);
}
// function display(){
//     text.innerHTML=localStorage.getItem("data");
// }
// display();

function display() {
    text.innerHTML = localStorage.getItem("data");

    // Attach event listeners after setting innerHTML
    let trashIcons = document.querySelectorAll(".fa-trash");
    trashIcons.forEach(icon => {
        icon.addEventListener("click", remove);
    });

    function remove() {
        // 'this' refers to the clicked trash icon
        this.parentElement.remove();
        saveData();
    }
}


display();


