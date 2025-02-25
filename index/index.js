document.addEventListener("DOMContentLoaded", () => {
    const postContainer = document.getElementById("post-container");
    const backToTopButton = document.getElementById("back-to-top");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const icon = document.querySelector(".icon");

    // 读取本地存储的暗黑模式状态
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
        icon.textContent = "☀️";
    }

    const posts = [
        { date: "Feb 20, 2025", title: "01. The Birth of an Idea", content: "Ideas shape the world. But where do they come from? This article explores the origins of creativity and how ideas evolve from mere thoughts to impactful innovations." },
        { date: "Jan 15, 2025", title: "02. The Future of Web Development", content: "Web development is evolving rapidly, with new frameworks, technologies, and best practices emerging. From AI-driven development to Web3, here's what the future holds." },
        { date: "Dec 10, 2024", title: "03. Cybersecurity Best Practices", content: "In an era of increasing cyber threats, it's crucial to stay protected. This article covers essential cybersecurity practices, from password management to encryption." },
        { date: "Nov 05, 2024", title: "04. The Evolution of Programming Languages", content: "Programming languages have evolved significantly over the decades. From assembly to modern high-level languages, we explore their journey and impact on software development." },
        { date: "Oct 01, 2024", title: "05. Machine Learning in Everyday Life", content: "Machine learning is no longer a futuristic concept. It's embedded in our daily lives, from recommendation systems to smart assistants. How does it work, and what's next?" },
        { date: "Sep 15, 2024", title: "06. Building Scalable Applications", content: "Scalability is key in modern software architecture. Learn about microservices, cloud computing, and design patterns that help applications handle millions of users." },
        { date: "Aug 10, 2024", title: "07. The Philosophy of Open Source", content: "Open source software has revolutionized the tech industry. But why do developers contribute for free? This article delves into the motivations and ethics behind open source." },
        { date: "Jul 05, 2024", title: "08. The Digital Nomad Lifestyle", content: "More professionals are embracing remote work and digital nomadism. What are the pros and cons, and how can one succeed in this lifestyle?" }
    ];


    function loadAllPosts() {
        posts.forEach(post => {
            const postElement = document.createElement("section");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <span class="post-date">${post.date}</span>
                <div class="post-content">
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                </div>
            `;
            postContainer.appendChild(postElement);
        });
    }

    loadAllPosts();

    window.addEventListener("scroll", () => {
        backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        const darkModeEnabled = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");
        icon.textContent = darkModeEnabled ? "☀️" : "🌙";
    });

    // ✅ 添加网页标题变化功能
    const originalTitle = document.title;
    const awayTitle = "咦，你怎么走啦？";
    const returnTitle = "咦，你又回来啦！";

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            document.title = awayTitle;
        } else {
            document.title = returnTitle;
            setTimeout(() => {
                document.title = originalTitle;
            }, 500);
        }
    });
});
