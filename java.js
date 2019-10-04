let input1 = document.querySelector("[data-dom = input1]")
let input2 = document.querySelector("[data-dom = input2]")
let h3 = document.querySelector("[data-dom = h3]")
let body = document.querySelector("[data-dom= gradient]")

body.style.background = "red";
 
input1.addEventListener("input", function(){
    body.style.background = 
    "linear-gradient( to right, " + input1.value + "," + input2.value + ")";
})

input2.addEventListener("input", function(){
    console.log(input2.value)
});