const sidebarBtn = document.querySelector(".toggle-btn");
const sidebarBt = document.getElementById("#toggle-btn");
const sidebar = document.querySelector("aside");

sidebarBtn.addEventListener("click", () => {
  document.body.classList.toggle("active");
});
sidebarBt.addEventListener("click", () => {
  document.body.classList.toggle("active");
});

const select = document.getElementById("filtre");
select.addEventListener("change", function(){
    const val = document.getElementById("filtre").value;
    document.getElementById("demo").innerHTML = val;
})

// const demo = document.getElementById("demo");
// demo.addEventListener("mouseover", function (){
//     alert("fui acionado")
//     demo.style.color = "red"
// })