const posts = [
    {
        highlightHeading: "Пост о здоровье",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Здоровье"
    },

    {
        highlightHeading: "Заголовок о спорте",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Спорт"
    },

    {
        highlightHeading: "Курение убивает",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Здоровье"
    },

    {
        highlightHeading: "Отдых",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Отдых"
    },

    {
        highlightHeading: "Отдых",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Отдых"
    },

    {
        highlightHeading: "Пост об образовании",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Образование"
    },

    {
        highlightHeading: "ЖКХ",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#ЖКХ"
    },

    {
        highlightHeading: "Max",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Образование"
    },

    {
        highlightHeading: "Разное",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Разное"
    },
]

// Posts render
const container = document.getElementById('posts-container');
function renderPosts(renderNum) {
    for (let i = 0; i < renderNum; i++) {
        const post = posts[i]
        container.insertAdjacentHTML('beforeend',
            `<div class="post-element">
                <p class="paragraph"><span class="paragraph-heading">${post.highlightHeading}:</span> ${post.heading}</p>
                <img src="${post.postImage}" alt="">
                <p class="paragraph-text">${post.postText}</p>
                <div class="date-container">
                    <p class="paragraph-text">${post.date} <span class="hashtag">${post.hashtag}</span></p>
                    <div class="line"></div>
                </div>
            </div>
        `);
    }
}

// Carousel buttons
const hashtagContainer = document.querySelector(".hashtag-container");
const left = document.getElementById("left-tag");
const right = document.getElementById("right-tag");

right.addEventListener("click", () => {
    hashtagContainer.scrollBy({ left: 200, behavior: "smooth" });
});

left.addEventListener("click", () => {
    hashtagContainer.scrollBy({ left: -200, behavior: "smooth" });
});

// Hashtag Logics
const selectedContainer = [];
const hashtagButtons = document.querySelectorAll('.hashtag-button')

hashtagButtons.forEach((hashtag) => {
    hashtag.addEventListener('click', () => {
        const hashtagText = hashtag.textContent;
        hashtag.classList.toggle('active');

        if (hashtag.classList.contains('active')) {
            posts.forEach((post) => {
                if (post.hashtag === hashtagText) {
                    if (!selectedContainer.includes(post)) {
                        selectedContainer.push(post);
                    }
                }
            });
        } else {
            for (let i = selectedContainer.length - 1; i >= 0; i--) {
                if (selectedContainer[i].hashtag === hashtagText) {
                    selectedContainer.splice(i, 1);
                }
            }
        }
        console.log(selectedContainer);
        renderSelectedPosts();
        containerUpdate();
    });
});

const selectedPostsContainer = document.getElementById("selected-posts-container");
function renderSelectedPosts() {
    selectedPostsContainer.innerHTML = "";

    selectedContainer.forEach((post) => {
        selectedPostsContainer.insertAdjacentHTML('beforeend',
            `<div class="post-element">
                <p class="paragraph"><span class="paragraph-heading">${post.highlightHeading}:</span> ${post.heading}</p>
                <img src="${post.postImage}" alt="">
                <p class="paragraph-text">${post.postText}</p>
                <div class="date-container">
                    <p class="paragraph-text">${post.date} <span class="hashtag">${post.hashtag}</span></p>
                    <div class="line"></div>
                </div>
            </div>
        `);
    })
}

const noPostsText = document.getElementById("no-posts-text");
function containerUpdate() {
    const anyActive = document.querySelector('.button.active') !== null;

    if (anyActive && selectedContainer.length === 0) {
        container.style.display = "none";
        selectedPostsContainer.style.display = "none";
        noPostsText.style.display = "block";
        return;
    }

    if (selectedContainer.length > 0) {
        container.style.display = "none";
        selectedPostsContainer.style.display = "flex";
        noPostsText.style.display = "none";
    }

    if (!anyActive) {
        container.style.display = "flex";
        selectedPostsContainer.style.display = "none";
        noPostsText.style.display = "none";
    }
}

// Логика подгрузки постов
let loadPostNum = 4;
let postsForLoad = 4;
const button = document.getElementById("loadPosts");
    button.addEventListener('click', () => {
        loadPostNum += postsForLoad;
        document.getElementById("posts-container").innerHTML = '';
        renderPosts(loadPostNum)
        if (loadPostNum + 4 > posts.length) {
            postsForLoad = posts.length - loadPostNum;
        }
        if (loadPostNum === posts.length) {
            button.style.display = "none";
        }
    }
)

renderPosts(loadPostNum);