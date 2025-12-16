document.addEventListener("DOMContentLoaded", () => {
    // Элементы
    const firstBtn = document.getElementById("firstBtn");
    const buttonsList = document.querySelector(".address-buttons-container");
    const allBtns = buttonsList.querySelectorAll(".button");
    const addressForm = document.querySelector(".address-form-container");
    const yourQuestCont = document.querySelector(".yourQuestion-container-list");
    const succesCont = document.querySelector(".succes-question-container");

firstBtn.classList.add("active");

function hideAllContainers() {
    [addressForm, yourQuestCont, succesCont].forEach(container => {
        if (container.classList.contains("show")) {
            container.classList.remove("show");
            container.classList.add("unshow");
        }
    });
}

function showContainer(container) {
    container.classList.remove("unshow");
    container.classList.add("show");
}

function setActiveButton(targetBtn) {
    allBtns.forEach(btn => btn.classList.remove("active"));
    targetBtn.classList.add("active");
}

buttonsList.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetBtn = e.target.closest(".button");
    if (!targetBtn) return;
    
    setActiveButton(targetBtn);
    
    hideAllContainers();
    
    switch(targetBtn.id) {
        case "solutionQuestion":
            showContainer(succesCont);
            break;
        case "yourQuestion":
            showContainer(yourQuestCont);
            break;
        case "firstBtn":
            showContainer(addressForm);
            break;
    }
});
});