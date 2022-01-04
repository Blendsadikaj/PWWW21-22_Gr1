function goToRoom(img,price,title){
    localStorage.setItem("img",img);
    localStorage.setItem("price",price);
    localStorage.setItem("title",title);
    location.replace("../SecondPage/SecondPage.html");
}