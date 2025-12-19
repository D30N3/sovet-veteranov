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

    {
        highlightHeading: "Разное",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Разное"
    },

    {
        highlightHeading: "Разное",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Разное"
    },

    {
        highlightHeading: "Разное",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Разное"
    },

    {
        highlightHeading: "Разное",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Разное"
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

// Posts render
const container = document.getElementById('posts-container');
function renderPosts(renderNum) {
    container.innerHTML = "";

    const actualRenderNum = Math.min(renderNum, posts.length);

    for (let i = 0; i < actualRenderNum; i++) {
        const post = posts[i];
        
        if (!post) continue;

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

// Hashtag Logics
let selectedContainer = [];
const hashtagButtons = hashtagContainer.querySelectorAll('.hashtag-button');
const selectedPostsContainer = document.getElementById("selected-posts-container");
const noPostsText = document.getElementById("no-posts-text");

function renderSelectedPosts(renderNum) {
    selectedPostsContainer.innerHTML = "";

    const actualRenderNum = Math.min(renderNum, selectedContainer.length);

    for (let i = 0; i < actualRenderNum; i++) {
        const post = selectedContainer[i];
        
        if (!post) continue;

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
    }
}

function containerUpdate() {
    const anyActive = document.querySelector('.hashtag-button.active') !== null;

    if (anyActive && selectedContainer.length === 0) {
        container.style.display = "none";
        selectedPostsContainer.style.display = "none";
        noPostsText.style.display = "block";
        loadButton.style.display = "none";
        return;
    }

    if (selectedContainer.length > 0) {
        container.style.display = "none";
        selectedPostsContainer.style.display = "flex";
        noPostsText.style.display = "none";
        loadButton.style.display = selectedContainer.length > loadPostNum ? "block" : "none";
    } else {
        container.style.display = "flex";
        selectedPostsContainer.style.display = "none";
        noPostsText.style.display = "none";
        loadButton.style.display = posts.length > loadPostNum ? "block" : "none";
    }
}

hashtagButtons.forEach((hashtag) => {
    hashtag.addEventListener('click', () => {
        const hashtagText = hashtag.textContent.trim();
        hashtag.classList.toggle('active');

        loadPostNum = 4;

        if (hashtag.classList.contains('active')) {
            posts.forEach((post) => {
                if (post.hashtag == hashtagText) {
                    if (!selectedContainer.includes(post)) {
                        selectedContainer.push(post);
                    }
                }
            });
            
        } else {
            selectedContainer = selectedContainer.filter(post => 
                post.hashtag.trim() !== hashtagText
            );
        }

        renderSelectedPosts(loadPostNum);
        containerUpdate();
    });
});

// Post load logic
const loadButton = document.getElementById("loadPosts");
let loadPostNum = 4;

loadButton.addEventListener('click', () => {
    if (selectedContainer.length > 0) {

        loadPostNum += 4;
        renderSelectedPosts(loadPostNum);
        containerUpdate();
    } else {

        loadPostNum += 4;
        renderPosts(loadPostNum);
        containerUpdate();
    }
});

renderPosts(loadPostNum);