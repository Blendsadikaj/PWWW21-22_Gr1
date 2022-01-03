$(window).on("load", function () {
    $("#preloader").fadeOut(2000);
    $(".content").fadeIn(2000)
})

function myFunction() {
    let allAreFilled = true;
    console.log("teste");
    document.getElementById("bookForm").querySelectorAll("[required]").forEach(function (i) {
        console.log(i.value);
        if(String.trim(i.getElementById("Name").value) === "")
            allAreFilled = false;
    }
    )
    if (!allAreFilled) {
        alert('Fill all the fields');
        return false;
    } 
}

function showPopUp() {
    document.getElementsByClassName('content')[0].style.filter = 'blur(4px)';
    document.getElementById("signature").style.display = "block";
  }


let isDrawn = false;

const paintCanvas = document.querySelector( '.js-paint' );
const context = paintCanvas.getContext( '2d' );
context.lineCap = 'round';

const colorPicker = document.querySelector( '.js-color-picker');

colorPicker.addEventListener( 'change', event => {
    context.strokeStyle = event.target.value; 
} );

const lineWidthRange = document.querySelector( '.js-line-range' );
const lineWidthLabel = document.querySelector( '.js-range-value' );

context.lineWidth = 1;

let x = 0, y = 0;
let isMouseDown = false;

const stopDrawing = () => { isMouseDown = false; }
const startDrawing = event => {
    isMouseDown = true;   
   [x, y] = [event.offsetX, event.offsetY];  
}
const drawLine = event => {
    if ( isMouseDown ) {
        isDrawn = true;
        const newX = event.offsetX;
        const newY = event.offsetY;
        context.beginPath();
        context.moveTo( x, y );
        context.lineTo( newX, newY );
        context.stroke();
        x = newX;
        y = newY;
    }
}

paintCanvas.addEventListener( 'mousedown', startDrawing );
paintCanvas.addEventListener( 'mousemove', drawLine );
paintCanvas.addEventListener( 'mouseup', stopDrawing );
paintCanvas.addEventListener( 'mouseout', stopDrawing );

function continueNow(){
    if(isDrawn)
        location.reload();
    else
        alert("You have to enter your signature");
}