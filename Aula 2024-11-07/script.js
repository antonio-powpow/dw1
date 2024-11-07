
let hamburgerIcon = document.querySelector("#hamburgerIcon")
let closeIcon = document.querySelector("#closeIcon")
let sidebar = document.querySelector("#sidebar");

hamburgerIcon.addEventListener("click", showSidebar)
closeIcon.addEventListener("click", hideSidebar)

function showSidebar(){
    sidebar.style.display = "flex";            
}
function hideSidebar(){
    sidebar.style.display = "none";
}