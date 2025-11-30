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
function renderPosts(posts) {
    const container = document.getElementById("posts-container");
    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post-element");

        const headingPost = document.createElement("p");
        headingPost.classList.add("paragraph");
        const headingSpan = document.createElement("span");
        headingSpan.classList.add("paragraph-heading");
        headingSpan.textContent = post.highlightHeading + ":";

        headingPost.appendChild(headingSpan);
        headingPost.append(" " + post.heading);

        const img = document.createElement("img");
        img.src = post.postImage;
        img.alt = "";

        const paragraphText = document.createElement("p");
        paragraphText.classList.add("paragraph-text");
        paragraphText.textContent = post.postText;

        const dateContainer = document.createElement("div");
        dateContainer.classList.add("date-container");
        const datePost = document.createElement("p");
        datePost.classList.add("paragraph-text");
        datePost.textContent = post.date + " ";
        const hashtagSpan = document.createElement("span");
        hashtagSpan.classList.add("hashtag");
        hashtagSpan.textContent = post.hashtag;
        datePost.appendChild(hashtagSpan);
        const line = document.createElement("div");
        line.classList.add("line");

        dateContainer.appendChild(datePost);
        dateContainer.appendChild(line);

        postElement.appendChild(headingPost);
        postElement.appendChild(img);
        postElement.appendChild(paragraphText);
        postElement.appendChild(dateContainer);

        container.appendChild(postElement);
        console.log(postElement)
    })
}

// Burger Button
const burger = document.getElementById("burger-button");
const menu = document.getElementById("mobile-menu");

const overlay = document.createElement("div");
overlay.id = "menu-overlay";
document.body.appendChild(overlay);

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

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

renderPosts(posts);