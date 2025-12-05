const hastagBtn = document.getElementById("hastag-btn");
const hastagList = document.getElementById("hastag-list");
const arrow = document.querySelector(".arrow-bottom");
let isOpen = false;

hastagBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isOpen) {
        hastagList.style.maxHeight = hastagList.scrollHeight + 'px';
        hastagList.style.opacity = "1";
        hastagList.style.marginTop = "20px"
        hastagList.style.pointerEvents = "all";
        arrow.classList.add("rotate");
        arrow.classList.remove("unrotate");
    } else {
        hastagList.style.maxHeight = "0";
        hastagList.style.opacity = "0";
        hastagList.style.marginTop = "0"
        hastagList.style.pointerEvents = "none";
        arrow.classList.remove("rotate");
        arrow.classList.add("unrotate");
    }
    isOpen = !isOpen;
});
