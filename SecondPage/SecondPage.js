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
        // if (!allAreFilled) return;
        // if (!i.value) allAreFilled = false;
        // console.log(i.value)
        // if (i.value == null)
        //     allAreFilled = false;
        // if (i.type === "select-one") {
        //     console.log("test")
        //     var ddl = document.getElementById("selectGuest");
        //     var selectedValue = ddl.options[ddl.selectedIndex].value;
        //     if (selectedValue === "0") {
        //         console.log("TEst")
        //         allAreFilled = false;
        //     }
        // }
    }
    )
    if (!allAreFilled) {
        alert('Fill all the fields');
        return false;
    } 
    // else {
    //     console.log(allAreFilled);
    //     document.getElementById("bookForm").submit();
    //     return true;
    // }
}