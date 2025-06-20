const button = document.getElementById("myButton")

function getValue(){
    const getTitle = document.getElementById("taskTitle").value
    const getDescription = document.getElementById("taskDescription").value
    console.log(getTitle,getDescription)
}

button.addEventListener("click",getValue)