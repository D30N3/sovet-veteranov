const committeeMembers = [
    {
        postImage: "../../assets/images/template.jpeg",
        memberFullName: "Фамилия Имя Отчество",
        memberPrivilege: "Должность",
        memberDescription: "Параграф, текст параграфа описывающий члена команды текст параграфа описывающий члена команды текст параграфа описывающий члена команды",
    },

    {
        postImage: "../../assets/images/template.jpeg",
        memberFullName: "Фамилия Имя Отчество",
        memberPrivilege: "Должность",
        memberDescription: "Параграф, текст параграфа описывающий члена команды текст параграфа описывающий члена команды текст параграфа описывающий члена команды",
    },

    {
        postImage: "../../assets/images/template.jpeg",
        memberFullName: "Фамилия Имя Отчество",
        memberPrivilege: "Должность",
        memberDescription: "Параграф, текст параграфа описывающий члена команды текст параграфа описывающий члена команды текст параграфа описывающий члена команды",
    },
]

// Committee render
function renderMembers() {
    const container = document.getElementById('committee-members-container');

    committeeMembers.forEach((member) => {
        let postImage = member.postImage;
        let memberFullName = member.memberFullName;
        let memberDescription = member.memberDescription;
        let memberPrivilege = member.memberPrivilege;

        container.insertAdjacentHTML('beforeend',
            `<div class="committee-container">
                <img src="${postImage}" alt="">
                <p class="paragraph-heading">${memberFullName} - ${memberPrivilege}</p>
                <p class="paragraph-text">${memberDescription}</p>
            </div>
        `);
    })
}

renderMembers()