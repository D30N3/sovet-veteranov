const posts = [
    {
        highlightHeading: "Заголовок",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Здоровье"
    },

    {
        highlightHeading: "Заголовок",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",

    },

    {
        highlightHeading: "Заголовок",
        heading: "текст заголовка! Ещё текст заголовка. Дополнительный текст заголовка для длины.",
        postImage: "./assets/images/template.jpeg",
        postText: "Параграф, текст прараграфа текст прараграфа текст прараграфа текст прараграфа",
        date: "Дек. 8, 2025",
        hashtag: "#Здоровье"
    },
]

// Posts render
function renderPosts() {
    const container = document.getElementById('posts-container');

    posts.forEach((post) => {
        let highlightHeading = post.highlightHeading;
        let heading = post.heading;
        let postImage = post.postImage;
        let postText = post.postText;
        let date = post.date;
        let hashtag = post.hashtag;

        container.insertAdjacentHTML('beforeend',
            `<div class="post-element">
                <p class="paragraph"><span class="paragraph-heading">${highlightHeading}:</span> ${heading}</p>
                <img src="${postImage}" alt="">
                <p class="paragraph-text">${postText}</p>
                <div class="date-container">
                    <p class="paragraph-text">${date} <span class="hashtag">${hashtag}</span></p>
                    <div class="line"></div>
                </div>
            </div>
        `);
    })
}

// Carousel buttons
const container = document.querySelector(".hashtag-container");
const left = document.getElementById("left-tag");
const right = document.getElementById("right-tag");

right.addEventListener("click", () => {
    container.scrollBy({ left: 200, behavior: "smooth" });
});

left.addEventListener("click", () => {
    container.scrollBy({ left: -200, behavior: "smooth" });
});

renderPosts();