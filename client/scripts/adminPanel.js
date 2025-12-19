const hastagBtn = document.getElementById("hastag-btn");
const hastagList = document.getElementById("hastag-list");
const hastagListContainer = document.querySelector(".hastag-list-container");
const arrow = document.querySelector(".arrow-bottom");
let isOpen = false;

hastagBtn.addEventListener("click", (e) => {
e.preventDefault();
if (!isOpen) {
    hastagList.style.maxHeight = "500px";
    hastagList.style.opacity = "1";
    hastagList.style.visibility = "visible";
    hastagList.style.pointerEvents = "all";
    
    hastagListContainer.classList.add("show");
    
    arrow.classList.add("rotate");
    arrow.classList.remove("unrotate");
} else {
    hastagList.style.maxHeight = "0";
    hastagList.style.opacity = "0";
    hastagList.style.visibility = "hidden";
    hastagList.style.pointerEvents = "none";
    
    hastagListContainer.classList.remove("show");
    
    arrow.classList.remove("rotate");
    arrow.classList.add("unrotate");
}

isOpen = !isOpen;

});

document.addEventListener("click", (e) => {
if (isOpen && !hastagBtn.contains(e.target) && !hastagListContainer.contains(e.target)) {
hastagList.style.maxHeight = "0";
hastagList.style.opacity = "0";
hastagList.style.visibility = "hidden";
hastagList.style.pointerEvents = "none";
    hastagListContainer.classList.remove("show");
    
    arrow.classList.remove("rotate");
    arrow.classList.add("unrotate");
    
    isOpen = false;
}

});