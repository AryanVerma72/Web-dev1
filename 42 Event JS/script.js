let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert("I was Clicked")
    document.querySelector(".box").innerHTML = "<b> You were clicked</b> Enjoy your click"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont't right click please")
})
