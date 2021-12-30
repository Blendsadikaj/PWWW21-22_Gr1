
let badWords = ["plenty"];

$(window).on("load", function () {
    $("#preloader").fadeOut(500);
    $(".content").fadeIn(1000);
    document.getElementById("allInclusicePrice").innerHTML = localStorage.getItem("price");
    document.getElementById("basicPackagePrice").innerHTML = (localStorage.getItem("price")-100);
    document.getElementById("bigPicture").setAttribute("src",localStorage.getItem("img"));
    document.getElementById("hotelTitle").innerHTML = localStorage.getItem("title");
    let myRe = /will*/gi;
    let str = document.querySelector('.comment-desc').children[2].textContent;
    let myArray;
    while ((myArray = myRe.exec(str)) !== null) {
        let msg = 'Found ' + myArray[0] + '. ';
        msg += 'Next match starts at ' + myRe.lastIndex;
        console.log(msg);
    }
    for(let i =0;i<badWords.length;i++){
        var re = new RegExp(badWords[i],"gi");
        const found = str.match(re);
        console.log(found);
        document.querySelector('.comment-desc').children[2].textContent = str.replaceAll(found,"****");
        console.log(badWords[i]);
      }
})

let price = 0;

function showPopUp() {

    $("#bookForm").submit(function (e) {
        e.preventDefault();
    });

    const content = document.getElementById("page");


    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let arrivalDate = document.getElementById('arrivaldate').value;
    let departureDate = document.getElementById('departuredate').value;

    if (name != '' && email != '' && arrivalDate != '' && departureDate != '') {

        let arrivalDt = new Date(arrivalDate);
        let departureDt = new Date(departureDate);
        let numOfGuests = document.getElementById("numberOfGuests");

        if (arrivalDt < new Date()) {
            alert("You can not set arrival date on earlier date than today");
        }
        else if (arrivalDt >= departureDt) {
            alert("Arrival date can not be earlier or on the same date than departure date")
        }
        else if (numOfGuests.options[numOfGuests.selectedIndex].value == "")
            alert("You have to enter the number of guests");
        else {
            content.style.pointerEvents = "none";
            document.getElementsByClassName('content')[0].style.filter = 'blur(4px)';
            document.getElementById("signature").style.display = "block";
        }
    }
}

function calculatePrice() {
    let arrivalDate = document.getElementById('arrivaldate').value;
    let departureDate = document.getElementById('departuredate').value;
    let arrivalDt = new Date(arrivalDate);
    let departureDt = new Date(departureDate);
    let numOfGuests = document.getElementById("numberOfGuests");
    let initialPrice = 0;

    if (departureDate == "" || arrivalDate == "") {
        price = 0;
    } else {
        if (document.getElementById("allinclusive").checked) {
            initialPrice = document.getElementById("allInclusicePrice").innerHTML;
        } else {
            initialPrice = document.getElementById("basicPackagePrice").innerHTML;
        }

        const timeDiff = departureDt.getTime() - arrivalDt.getTime();
        const numOfDays = timeDiff / (1000 * 3600 * 24);

        if (numOfDays <= 0)
            price = 0;
        else
            price = initialPrice * numOfDays * numOfGuests.value;
    }

    if(isNumber(price))
        document.getElementById("bookingPrice").innerHTML = price;
    else
        alert("Something went wrong");
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }


let isDrawn = false;

const paintCanvas = document.querySelector('.js-paint');
const context = paintCanvas.getContext('2d');
context.lineCap = 'round';

var grd = context.createLinearGradient(0, 0, 700, 580);
grd.addColorStop(0, "#f1f1f1");
grd.addColorStop(1, "white");
context.fillStyle = grd;
context.fillRect(0, 0, 600, 480);

var img = document.getElementById("signatureExample")
context.drawImage(img, 200, 0);

context.font = "30px Arial";
context.fillStyle = "black";
context.fillText("Example: ", 20, 100);

const colorPicker = document.querySelector('.js-color-picker');

colorPicker.addEventListener('change', event => {
    context.strokeStyle = event.target.value;
});

const lineWidthRange = document.querySelector('.js-line-range');
const lineWidthLabel = document.querySelector('.js-range-value');

context.lineWidth = 1;

let x = 0, y = 0;
let isMouseDown = false;

const stopDrawing = () => { isMouseDown = false; }
const startDrawing = event => {
    isMouseDown = true;
    [x, y] = [event.offsetX, event.offsetY];
}
const drawLine = event => {
    if (isMouseDown) {
        isDrawn = true;
        const newX = event.offsetX;
        const newY = event.offsetY;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(newX, newY);
        context.stroke();
        x = newX;
        y = newY;
    }
}

paintCanvas.addEventListener('mousedown', startDrawing);
paintCanvas.addEventListener('mousemove', drawLine);
paintCanvas.addEventListener('mouseup', stopDrawing);
paintCanvas.addEventListener('mouseout', stopDrawing);

function continueNow() {
    if (isDrawn) {
        alert("You made a reservetion of " + price + "$.")
        document.getElementById("bookForm").submit();
        location.reload();
    }
    else
        alert("You have to enter your signature");
}