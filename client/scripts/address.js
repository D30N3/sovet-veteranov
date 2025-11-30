document.addEventListener('DOMContentLoaded', () => {

    /* форма для обращения */
    const firstBtn = document.getElementById("firstBtn");
    firstBtn.classList.add("active");

    /* кнопки с вопросами и формой */
    const buttonsList = document.querySelector(".address-buttons-container");
    const allBtns = buttonsList.querySelectorAll(".button");


    buttonsList.addEventListener('click', (e) => {
        e.preventDefault();

        const targetBtn = e.target.closest(".button");
        const addresForm = document.querySelector(".address-form-container");
        const yourQuestCont = document.querySelector(".yourQuestion-container-list");
        const succesCont = document.querySelector(".succes-question-container");

        if (targetBtn) {
            if (targetBtn.id === "solutionQuestion") {

                allBtns.forEach(btn => {
                    btn.classList.remove("active")
                })
                targetBtn.classList.add('active');

                if (yourQuestCont.classList.contains("show")) {
                    yourQuestCont.classList.remove("show");
                    yourQuestCont.classList.add("unshow")
                }

                if (addresForm.classList.contains("show")) {
                    addresForm.classList.remove("show")
                    addresForm.classList.add("unshow")
                }


                succesCont.classList.remove("unshow");
                succesCont.classList.add("show");

            }

            if (targetBtn.id === "yourQuestion") {
                allBtns.forEach(btn => {
                    btn.classList.remove("active")
                })

                targetBtn.classList.add('active');

                if (succesCont.classList.contains("show") || addresForm.classList.contains("show")) {
                    succesCont.classList.remove("show")
                    succesCont.classList.add("unshow")

                    addresForm.classList.remove("show")
                    addresForm.classList.add("unshow")
                }

                yourQuestCont.classList.remove("unshow")
                yourQuestCont.classList.add("show");
            }


            if (targetBtn.classList.contains("form")) {

                allBtns.forEach(btn => {
                    btn.classList.remove("active")
                })

                targetBtn.classList.add('active');

                if (succesCont.classList.contains("show") || yourQuestCont.classList.contains("show")) {
                    succesCont.classList.remove("show")
                    succesCont.classList.add("unshow")

                    yourQuestCont.classList.remove("show")
                    yourQuestCont.classList.add("unshow")
                }

                addresForm.classList.remove("unshow")
                addresForm.classList.add("show")
            }
        }
    })
})

