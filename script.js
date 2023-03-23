const main = document.getElementById("main")
const getStarted = document.getElementById("get-started")

const input = document.getElementById("input")
const button = document.getElementById("button")


input.addEventListener("type", () =>{
    main.style.display = "none";
   input.style.display = "block";
})

button.addEventListener("click", () =>{
    main.style.display = "block";
    button.style.display = "none";
})
const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
})
