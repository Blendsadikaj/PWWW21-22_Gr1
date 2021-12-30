const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart",dragStart);
    // elem.addEventListener("drag",drag);
    // elem.addEventListener("dragend",dragEnd);
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter",dragEnter);
    elem.addEventListener("dragover",dragOver);
    elem.addEventListener("dragleave",dragLeave);
    elem.addEventListener("drop",drop);
});

function dragStart(event){
    event.dataTransfer.setData("text",event.target.id);
}

function dragOver(event){
    if(!event.target.classList.contains("dropped"))
        event.preventDefault(); // allows dropt. By default dropping is not allowed
}

function drop(event){
    event.preventDefault(); // by default when image drops it gives the link of the image
    event.target.classList.remove("droppable-hover");
    const draggableElementData = event.dataTransfer.getData("text");
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    if(draggableElementData === droppableElementData){
        event.target.classList.add("dropped");
        const draggableElement = document.getElementById(draggableElementData);
        // event.target.style.backgroundColor = draggableElement.style.color; //accessing styling this way only works with inline styles
        // event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color; this is how you would access css of an element
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable","false");
        event.target.insertAdjacentHTML("afterbegin",`<img src = "${draggableElement.getAttribute("src")}" class = "draggable-interface-image"></img>`);
    }
    const divPictures = document.getElementsByClassName("droppable");
    const finishedPictures = Array.from(divPictures).reduce(((accumulator, divPicture) => {
        return divPicture.children.length > 1 && accumulator;
    }), true);

    if (finishedPictures) {
        document.getElementById("success").innerHTML =
            `<img src="../images/success.png"></img>`
    }
}

function dragEnter(event){
    if(!event.target.classList.contains("dropped"))
        event.target.classList.add("droppable-hover");
}

function dragLeave(event){
    event.target.classList.remove("droppable-hover");
}

