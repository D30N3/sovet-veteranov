const members = [
    {
        postImage: "../../assets/images/template.jpeg",
        memberFullName: "Фамилия Имя Отчество",
        memberDescription: "Параграф, текст параграфа описывающий члена команды текст параграфа описывающий члена команды текст параграфа описывающий члена команды",
    },

    {
        postImage: "../../assets/images/template.jpeg",
        memberFullName: "Фамилия Имя Отчество",
        memberDescription: "Параграф, текст параграфа описывающий члена команды текст параграфа описывающий члена команды текст параграфа описывающий члена команды",
    },

    {
        postImage: "../../assets/images/template.jpeg",
        memberFullName: "Фамилия Имя Отчество",
        memberDescription: "Параграф, текст параграфа описывающий члена команды текст параграфа описывающий члена команды текст параграфа описывающий члена команды",
    },
]

// Members render
function renderMembers() {
    const container = document.getElementById('team-members-container');

    members.forEach((member) => {
        let postImage = member.postImage;
        let memberFullName = member.memberFullName;
        let memberDescription = member.memberDescription;

        container.insertAdjacentHTML('beforeend',
            `<div class="member-container">
                <img src="${postImage}" alt="">
                <p class="paragraph-heading">${memberFullName}</p>
                <p class="paragraph-text">${memberDescription}</p>
            </div>
        `);
    })
}

renderMembers()