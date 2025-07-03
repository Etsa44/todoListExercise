// j'appelle mon bouton depuis mon html
const button = document.getElementById("myButton")
const tbody = document.getElementById("tbody")
// cette variable sert initialiser le compteur
let counter = 1;
// fonction pour recuperer les donnees 
function getValue(){
    // ces deux ligne permettent de rendre mon tabeau visible
    const table = document.getElementById("tableTask")
    table.style.display = "block"
    // cette ligne supprime le comportement par defaut du bouton qui est de reactualiser la page lors du clique
    event.preventDefault();
    // je recupere la valeur soumis a mon input title
    const getTitle = document.getElementById("taskTitle").value
    // je recupere la valeur soumis a mon input description
    const getDescription = document.getElementById("taskDescription").value
    // je recupere la valeur de mon select 
    const getPriority = document.getElementById("taskPriority").value
    // creation de container pour afficher les donnees et insertion des donnees
    const tr = document.createElement("tr")
    // creation du coumpteur
    tr.id = "element-" + counter;
    const idContenair = document.createElement("td")
    idContenair.textContent = counter
    idContenair.style.color = "white"
    counter++;
    const titleContenair = document.createElement("td")
    titleContenair.textContent = getTitle
    titleContenair.style.color = "white"
    const descriptionContenair = document.createElement("td")
    descriptionContenair.textContent = getDescription
    descriptionContenair.style.color = "white"
    const priorityContenair = document.createElement("td")
    priorityContenair.textContent = getPriority
    priorityContenair.style.color = "white"
    // imbrication de contenaire
    tr.appendChild(idContenair)
    tr.appendChild(titleContenair)
    tr.appendChild(descriptionContenair)
    tr.appendChild(priorityContenair)
    tbody.appendChild(tr)
    // les 3 lignes qui suivent c'est pour reactualiser les champs remplis apres soumission 
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskPriority").value = "";
    // j'affiche tout a la console pour verifiee
    console.log(getTitle,getDescription,getPriority)
}
// j'ajoute un ecouteur d'evenement au click de mon bouton qui est l'execution de ma fonction
button.addEventListener("click",getValue)
