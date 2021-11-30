window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY);
})
window.addEventListener("click",function(){
    const items = document.querySelectorAll("header ul li a");
    items.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector("a.active").classList.remove("active");
            item.classList.add("active");
        })
    })
})