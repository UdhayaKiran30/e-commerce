var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(i=0;i<productList.length;i++)
    {
        var productName = productList[i].querySelector("p").textContent

        if(productName.toUpperCase().indexOf(enteredValue) <0 )
        {
            productList[i].style.display="none"
        }
        else {
            productList[i].style.display="block"
        }
    }
})