console.log("This is DOM Code")

// let boxes = document.getElementsByClassName("box")

// console.log(boxes)
// boxes[2].style.backgroundColor = "red"
// document.getElementById("red").style.backgroundColor = "Green"

// document.querySelector(".box").style.backgroundColor = "Pink" //For One

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "Pink"
})